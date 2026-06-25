# 編集チェックリスト

記事を `src/data/articles.ts` に反映する前に、必ず確認する。
`docs/article-generation-prompt.md` でAIに下書きを作らせた場合も、このチェックリストは人間が行う。
1つでも「いいえ」がある場合は公開しない。

## 1. 一次情報確認

- [ ] `primarySources` に挙げた出典を実際に開き、内容が記事の記述と一致しているか確認したか
- [ ] 出典が `src/data/sources.ts` に存在しない場合、新規ソースカードを追加したか
- [ ] 数値・統計を使う場合、出典元の発表時点・対象範囲が記事の文脈と矛盾していないか

## 2. 事実と解釈の分離

- [ ] `whatHappened` に解釈・評価が混ざっていないか（「〜のはずだ」「〜に違いない」等の推測表現がないか）
- [ ] `narrativeViews` の各陣営の記述が、その陣営の主張として書かれているか（地の文の事実として書かれていないか）

## 3. 感情ワード分解のトーン確認

- [ ] `emotionWords` の `contextNote` が、特定陣営を揶揄・断罪する書き方になっていないか
- [ ] 新規の感情ワードを使う場合、`src/data/terms.ts` に追加し、`caution` に陰謀論化を避ける留保を入れたか

## 4. 日本インパクト評価の根拠確認

- [ ] `japanImpact.scores` の各軸のスコアについて、`shortTerm` / `midTerm` / `longTerm` の説明から根拠が読み取れるか
- [ ] スコアが極端（-5 や +5 に近い）な場合、それに見合う説明になっているか
- [ ] 関係のない軸を無理に埋めていないか（関係する軸だけを選んでいるか）

## 5. 投資推奨に見えないか

- [ ] `investmentImplications` が「買い」「売り」「推奨銘柄」のような断定になっていないか
- [ ] 「どの構造を確認すべきか」という視点の提供にとどまっているか

## 6. 未確定要素の明示

- [ ] `uncertainties` が最低2つあるか
- [ ] それぞれに、なぜ断定できないかの理由（`whyUncertain`）が書かれているか
- [ ] 結論（`conclusion`）が、未確定要素を踏まえたうえで断定しすぎていないか

## 7. スマホ表示確認

- [ ] スマホ幅（iPhone相当）で記事詳細ページを開き、横方向にページ全体がはみ出していないか
- [ ] `NarrativeComparisonTable` がスマホでカード表示になり、読めているか
- [ ] `JapanImpactMeter` のスコア数値が画面内に収まっているか
- [ ] 見出し・タグ・フッターの折れ方が不自然でないか

## 8. 出典リンク確認

- [ ] `primarySources` の `url` が実際に開けるか（リンク切れがないか）
- [ ] `sourceSlug` が `src/data/sources.ts` に存在する slug と一致しているか
- [ ] `emotionWords` の `termSlug` が `src/data/terms.ts` に存在する slug と一致しているか

---

すべて確認できたら、`npm run lint && npx tsc --noEmit && npm run build` を実行し、
成功してから `git commit` ・ `git push` する。
