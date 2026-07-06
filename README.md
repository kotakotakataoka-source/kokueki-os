# 国益分解 / kokueki-os

**感情論を排し、一次情報・多角的視点・日本の実利で国際情勢を読む情報キュレーションサイト。**

🌐 **[kokueki-os.vercel.app](https://kokueki-os.vercel.app)**

---

## このサイトについて

「完全に中立な情報源は存在しない」という前提に立ち、各情報源の立場・国家利害・資本関係を可視化したうえで、**事実・解釈・感情表現・日本への実利・未確定要素を分離**して提示します。

「誰が正しいか」ではなく「**これは日本にとって、どこがプラスでどこがマイナスか**」を問う記事テンプレートを採用しています。

### 各記事が持つ構造

| セクション | 内容 |
|---|---|
| 今日の論点 | 問いの設定 |
| 何が起きたのか | 事実のみ（解釈・評価を含まない） |
| 一次情報・元データ | **3階層分類**（一次情報 / 二次報道 / 分析・解釈） |
| 各陣営の見方 | 米国・中国・日本・第三極それぞれの「強調点」「隠す点」「実際の利害」 |
| 感情ワード分解 | レトリックとして使われている言葉の構造分析 |
| 日本への実利評価 | 経済・安全保障・外交など複数軸のスコア |
| 未確定要素 | 「断定できないこと」を明示 |
| 読者への問い | 誘導しない問いかけ |

---

## 自動化パイプライン

毎週月曜 09:00 JST に GitHub Actions が起動し、登録済みRSSフィードから新着情報を取得してClaude（Anthropic）が記事を自動生成・公開します。

```
RSSフィード取得（RIETI・The Diplomat・Japan Times・NHK World 等）
      ↓
Claude API で記事ドラフト生成（docs/article-generation-prompt.md を使用）
      ↓
src/data/articles.ts に追記 → main ブランチへコミット
      ↓
Vercel 自動デプロイ
```

---

## スタック

- **フレームワーク**: Next.js 16 (App Router) / TypeScript
- **スタイル**: Tailwind CSS v4 / base-ui (shadcn)
- **デプロイ**: Vercel
- **記事生成**: Anthropic Claude API + GitHub Actions
- **解析**: Vercel Analytics

---

## ディレクトリ構成

```
src/
  app/          ページ（トップ・記事一覧・記事詳細・ソース台帳・感情ワード辞典・About）
  components/   共通コンポーネント / article/ 配下は記事テンプレート専用
  data/         articles.ts / sources.ts / terms.ts（静的データ）
  types/        Article / SourceEntry / TermEntry 型定義
docs/
  article-generation-prompt.md   記事生成の固定プロンプトテンプレート
  editorial-checklist.md         公開前チェックリスト
scripts/
  generate-draft.mjs   RSS取得・Claude API呼び出し・articles.ts追記スクリプト
  rss-sources.json     監視するRSSフィードの設定
.github/
  workflows/
    draft-article.yml  毎週自動実行のワークフロー
```

---

## ローカル開発

```bash
npm install
npm run dev
# http://localhost:3000
```

```bash
# チェック
npm run lint
npx tsc --noEmit
npm run build
```

---

## 記事生成の自動化をセットアップする場合

1. Anthropic の API キーを取得する
2. GitHub リポジトリの **Settings → Secrets and variables → Actions** に `ANTHROPIC_API_KEY` を登録
3. Actions タブ → 「記事自動生成・公開」→「Run workflow」で手動テスト可能

`scripts/rss-sources.json` を編集することで監視するRSSフィードを変更できます。

---

## ライセンス

MIT

---

*このプロジェクトは情報リテラシーの向上を目的としています。記事の内容は自動生成を含み、事実確認は利用者自身でも行うことを推奨します。*
