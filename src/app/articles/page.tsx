import type { Metadata } from "next";
import { ArticleCard } from "@/components/article-card";
import { articles } from "@/data/articles";

export const metadata: Metadata = {
  title: "記事一覧",
  description:
    "各テーマについて、事実・各陣営の見方・感情ワードの分解・日本への実利を整理した記事の一覧。",
};

const sortedArticles = [...articles].sort(
  (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
);

export default function ArticlesPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
      <p className="text-xs font-bold tracking-wide text-muted-foreground">
        記事一覧
      </p>
      <h1 className="mt-2 text-2xl font-bold text-foreground">
        論点の構造分解
      </h1>
      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
        事実・各陣営の見方・感情ワード・日本への実利・未確定要素を分離して整理しています。
      </p>

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        {sortedArticles.map((article) => (
          <ArticleCard key={article.slug} article={article} />
        ))}
      </div>
    </div>
  );
}
