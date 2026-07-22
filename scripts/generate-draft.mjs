/**
 * 記事ドラフト自動生成スクリプト
 *
 * 動作:
 *   1. scripts/rss-sources.json で設定したRSSフィードを取得
 *   2. 過去7日以内の新着記事を収集
 *   3. Claude APIに「国益分解」の記事生成プロンプトと共に渡す
 *   4. 生成されたTypeScript記事オブジェクトを src/data/articles.ts に追記
 *   5. GitHub Actions のアウトプット変数を設定 (branch / title)
 *
 * 依存: Node.js 20+ のみ (npm install 不要)
 */

import { readFileSync, writeFileSync, appendFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');

// ─── GitHub Actions アウトプット設定 ─────────────────────────────────────────

function setOutput(name, value) {
  const file = process.env.GITHUB_OUTPUT;
  if (file) appendFileSync(file, `${name}=${value}\n`);
  else console.log(`[output] ${name}=${value}`);
}

// ─── RSS フィード取得・パース ─────────────────────────────────────────────────

function extractXmlText(xml, tag) {
  const match = xml.match(new RegExp(`<${tag}(?:[^>]*)><!\\[CDATA\\[([\\s\\S]*?)\\]\\]><\\/${tag}>|<${tag}(?:[^>]*)>([\\s\\S]*?)<\\/${tag}>`, 'i'));
  if (!match) return '';
  return (match[1] ?? match[2] ?? '').trim();
}

function parseItems(xml) {
  const items = [];
  const itemBlocks = xml.split(/<item[\s>]/i).slice(1);
  for (const block of itemBlocks) {
    const end = block.indexOf('</item>');
    const item = end >= 0 ? block.slice(0, end) : block;
    items.push({
      title: extractXmlText(item, 'title'),
      link: extractXmlText(item, 'link') || (item.match(/<link\s*\/?>([^<]+)/i)?.[1] ?? '').trim(),
      description: extractXmlText(item, 'description').slice(0, 300),
      pubDate: extractXmlText(item, 'pubDate') || extractXmlText(item, 'dc:date') || extractXmlText(item, 'published'),
    });
  }
  return items.filter(i => i.title);
}

async function fetchFeed(source) {
  try {
    const res = await fetch(source.url, {
      signal: AbortSignal.timeout(10000),
      headers: { 'User-Agent': 'kokueki-os-bot/1.0' },
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const xml = await res.text();
    const items = parseItems(xml);
    const cutoff = Date.now() - 7 * 24 * 60 * 60 * 1000;
    return items
      .filter(i => {
        const d = i.pubDate ? new Date(i.pubDate).getTime() : Date.now();
        return !isNaN(d) && d >= cutoff;
      })
      .slice(0, 5)
      .map(i => ({ ...i, sourceName: source.name }));
  } catch (err) {
    console.warn(`[skip] ${source.name}: ${err.message}`);
    return [];
  }
}

// ─── 既存データから slug 一覧を抽出 ─────────────────────────────────────────

function extractSlugs(filePath) {
  const content = readFileSync(join(ROOT, filePath), 'utf8');
  return [...content.matchAll(/^\s+slug:\s+"([^"]+)"/gm)].map(m => m[1]);
}

// ─── Claude API 呼び出し ────────────────────────────────────────────────────

async function callClaude(prompt) {
  const model = process.env.ANTHROPIC_MODEL || 'claude-sonnet-4-6';
  const res = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': process.env.ANTHROPIC_API_KEY,
      'anthropic-version': '2023-06-01',
    },
    body: JSON.stringify({
      model,
      max_tokens: 16000,
      messages: [{ role: 'user', content: prompt }],
    }),
  });
  if (!res.ok) {
    const err = await res.text();
    throw new Error(`Claude API ${res.status}: ${err.slice(0, 200)}`);
  }
  const data = await res.json();
  return data.content?.[0]?.text ?? '';
}

// ─── 記事オブジェクトを articles.ts に追記 ───────────────────────────────────

function insertArticle(articleCode) {
  const filePath = join(ROOT, 'src/data/articles.ts');
  const content = readFileSync(filePath, 'utf8');
  const insertIdx = content.lastIndexOf('\n];');
  if (insertIdx < 0) throw new Error('articles.ts: closing ]; が見つかりません');
  const newContent =
    content.slice(0, insertIdx) +
    '\n\n  ' + articleCode.trim().replace(/\n/g, '\n  ') + ',' +
    content.slice(insertIdx);
  writeFileSync(filePath, newContent, 'utf8');
}

// ─── PR 本文の生成 ────────────────────────────────────────────────────────────

function writePrBody(title, slug, sourceSummary) {
  const body = `## 自動生成ドラフト記事

**タイトル:** ${title}
**スラッグ:** \`${slug}\`
**参考RSSソース:**
${sourceSummary}

---

## ⚠️ 公開前チェックリスト（必須）

編集方針に従い、以下をすべて確認してからマージしてください。

- [ ] \`primarySources\` に挙げた出典を実際に開き、内容が記事の記述と一致しているか確認した
- [ ] 数値・統計は出典元の発表時点・対象範囲と矛盾していない
- [ ] \`whatHappened\` に解釈・評価が混ざっていない
- [ ] \`narrativeViews\` の各陣営の記述が、その陣営の主張として書かれている
- [ ] \`emotionWords\` の \`contextNote\` が、特定陣営を揶揄・断罪する書き方になっていない
- [ ] \`japanImpact.scores\` の根拠が \`shortTerm\` / \`midTerm\` / \`longTerm\` から読み取れる
- [ ] \`investmentImplications\` が断定的な投資推奨になっていない
- [ ] \`uncertainties\` が最低2つあり、各々に \`whyUncertain\` が書かれている
- [ ] \`primarySources\` の \`url\` が実際に開けるか確認した
- [ ] ビルドが通ることを確認: \`npm run lint && npx tsc --noEmit && npm run build\`

> このPRはAIが自動生成したドラフトです。**AIの出力をそのまま公開しないでください。**
> 上記チェックリストをすべて完了してからマージしてください。
`;
  writeFileSync(join(ROOT, '.draft-pr-body.md'), body, 'utf8');
}

// ─── メイン処理 ──────────────────────────────────────────────────────────────

async function main() {
  if (!process.env.ANTHROPIC_API_KEY) {
    console.error('ANTHROPIC_API_KEY が設定されていません');
    process.exit(1);
  }

  // 1. RSS フィード取得
  const sources = JSON.parse(readFileSync(join(ROOT, 'scripts/rss-sources.json'), 'utf8'));
  const results = await Promise.all(sources.map(fetchFeed));
  const allItems = results.flat();

  if (allItems.length === 0) {
    console.log('新着記事がありません。スキップします。');
    return;
  }

  console.log(`取得した記事候補: ${allItems.length} 件`);

  // 2. 既存データの slug 一覧
  const existingArticleSlugs = extractSlugs('src/data/articles.ts');
  const sourceSlugs = extractSlugs('src/data/sources.ts');
  const termSlugs = extractSlugs('src/data/terms.ts');

  // 3. 型定義・プロンプトテンプレートを読み込み
  const articleType = readFileSync(join(ROOT, 'src/types/article.ts'), 'utf8');
  const promptTemplate = readFileSync(join(ROOT, 'docs/article-generation-prompt.md'), 'utf8');
  const today = new Date().toISOString().slice(0, 10);

  // 4. 記事候補を整形
  const itemsSummary = allItems
    .map((item, i) => `[${i + 1}] ${item.sourceName}\nタイトル: ${item.title}\nURL: ${item.link}\n概要: ${item.description}\n日付: ${item.pubDate}`)
    .join('\n\n');

  // 5. プロンプト構築
  // テンプレートから「# 出力形式」より前のコアのみ抽出（競合を避ける）
  const templateStart = promptTemplate.indexOf('あなたは「国益分解」');
  const templateEnd = promptTemplate.indexOf('# 出力形式');
  const templateCore = templateStart >= 0 && templateEnd > templateStart
    ? promptTemplate.slice(templateStart, templateEnd).trim()
    : promptTemplate.split('## 備考')[0].trim();

  const prompt = `${templateCore}

# 禁止事項

- 出典なしで事実を断定すること
- 感情を煽る見出し・表現を使うこと（「衝撃」「暴挙」「危機」等）
- 「このサイトは完全に中立だ」と書くこと
- 特定の国家・政党・思想を善悪だけで評価すること
- 公式発表・国家公式メディアの内容をそのまま事実として扱うこと
- SNSの反応を「世論」として扱うこと
- 投資判断を断定すること
- 読者の不安・怒りを煽ってクリックさせる表現を使うこと

# 今回のテーマ（RSS自動生成モード）

テーマ：以下のRSS記事候補から、このサイトの読者にとって最も分析価値が高いものを1つ選んで記事化してください。
参考にする情報・URL・メモ：以下の記事候補リストを参照
公開予定日（publishedAt）：${today}

---

## 記事候補（RSS新着 過去7日）

${itemsSummary}

---

## 既存記事のslug一覧（重複してはいけない）

${existingArticleSlugs.join(', ')}

---

## src/data/sources.ts の登録済みslug（sourceSlugに使える値）

${sourceSlugs.join(', ')}

---

## src/data/terms.ts の登録済みslug（termSlugに使える値）

${termSlugs.join(', ')}

---

## src/types/article.ts（型定義）

\`\`\`typescript
${articleType}
\`\`\`

---

# 出力形式（自動化モード・厳守）

上記の記事候補から最も分析価値が高い1件を選び、Step 1〜10を踏んで分析してください。
もし候補の中に適切なものが1つもない場合（すでにカバー済み、事実確認できない等）は "NO_NEW_ARTICLE" とだけ出力してください。

適切な候補がある場合、Step 1〜10の分析を行い、**分析の最後に必ず**以下のマーカーで囲んだ \`src/types/article.ts\` の \`Article\` 型に準拠したTypeScriptオブジェクトリテラルを出力してください。

---ARTICLE_START---
{
  slug: "...",
  ...
}
---ARTICLE_END---

マーカーは必須です。マーカーなしでTypeScriptオブジェクトを出力しないでください。
マーカーの外に説明文（新規SourceEntry/TermEntryの提案など）を書いても構いません。`;

  // 6. Claude API 呼び出し
  console.log('Claude API を呼び出し中...');
  const response = await callClaude(prompt);

  if (response.includes('NO_NEW_ARTICLE')) {
    console.log('適切な新規トピックなし。スキップします。');
    return;
  }

  // 7. 記事オブジェクトを抽出
  const startMarker = '---ARTICLE_START---';
  const endMarker = '---ARTICLE_END---';
  const startIdx = response.indexOf(startMarker);
  const endIdx = response.indexOf(endMarker);

  if (startIdx < 0 || endIdx < 0) {
    console.error('記事マーカーが見つかりません。\n---\n' + response.slice(0, 500));
    process.exit(1);
  }

  const articleCode = response.slice(startIdx + startMarker.length, endIdx).trim();

  // slug を抽出（ブランチ名・PR タイトルに使う）
  const slugMatch = articleCode.match(/slug:\s*["']([^"']+)["']/);
  const titleMatch = articleCode.match(/title:\s*["']([^"']+)["']/);
  const slug = slugMatch?.[1] ?? `draft-${today}`;
  const title = titleMatch?.[1] ?? '（タイトル不明）';

  if (existingArticleSlugs.includes(slug)) {
    console.log(`slug "${slug}" は既存記事と重複しています。スキップします。`);
    return;
  }

  // 8. articles.ts に追記
  console.log(`記事を追記: ${slug}`);
  insertArticle(articleCode);

  // 9. PR 本文を作成
  const usedSources = allItems
    .slice(0, 3)
    .map(i => `- [${i.sourceName}](${i.link}) — ${i.title}`)
    .join('\n');
  writePrBody(title, slug, usedSources);

  // 10. GitHub Actions アウトプット設定
  const branch = `draft/article-${today}-${slug}`.slice(0, 80);
  setOutput('branch', branch);
  setOutput('title', title);

  console.log(`✓ 完了: branch=${branch}, title=${title}`);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
