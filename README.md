# 国益分解（kokueki-os）

感情論を排し、一次情報・多角的視点・日本の実利を整理する情報キュレーションサイト。

完全に中立な情報源は存在しないという前提に立ち、各情報源の立場を可視化したうえで、
事実・解釈・感情表現・日本への実利・未確定要素を分離して提示します。
編集方針の詳細は [`/about`](https://kokueki-os.vercel.app/about) を参照してください。

- 本番: https://kokueki-os.vercel.app
- リポジトリ: https://github.com/kotakotakataoka-source/kokueki-os

## スタック

Next.js (App Router) / TypeScript / Tailwind CSS v4 / shadcn/ui（base-ui）

## ディレクトリ構成

```
src/
  app/                トップ・記事一覧・記事詳細・ソース台帳・感情ワード辞典・About
  components/          ページ共通コンポーネント / article配下は記事テンプレート専用パーツ
  data/                articles.ts / sources.ts / terms.ts（静的データ、将来CMS/DB移行を想定して型分離）
  types/               Article / SourceEntry / TermEntry の型定義
docs/
  article-generation-prompt.md   記事を量産するための固定プロンプトテンプレート
```

## ローカル開発

```bash
npm install
npm run dev
# http://localhost:3000
```

## 公開前チェック

```bash
npm run lint
npx tsc --noEmit
npm run build
```

## デプロイ

`main` ブランチへの push で Vercel に自動デプロイされます（GitHub連携済み）。
