import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArticleCard } from "@/components/article-card";
import { TermCard } from "@/components/term-card";
import { articles } from "@/data/articles";
import { terms } from "@/data/terms";
import { ARTICLE_CATEGORY_LABELS } from "@/types/article";
import { formatImpactScore, impactToneClass } from "@/lib/impact";

const sortedArticles = [...articles].sort(
  (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
);

export default function Home() {
  const [topArticle, ...restArticles] = sortedArticles;
  const pickedTerms = terms.slice(0, 3);

  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
      {/* ヒーロー */}
      <section className="border-b border-border pb-12">
        <p className="text-sm font-semibold tracking-wide text-accent">
          STRUCTURE OVER NARRATIVE
        </p>
        <h1 className="mt-3 text-3xl font-bold leading-tight text-foreground sm:text-4xl">
          感情論を排し、一次情報・多角的視点・
          <br className="hidden sm:block" />
          日本の実利を整理する。
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
          すべての情報源には立場があります。本サイトはその立場を可視化し、
          事実・解釈・感情表現・日本への実利を分けて示します。
          問いは常に一つ。「これは日本にとって、どこがプラスで、どこがマイナスか」。
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Button nativeButton={false} render={<Link href="/articles" />}>
            記事一覧を見る
          </Button>
          <Button
            nativeButton={false}
            variant="outline"
            render={<Link href="/sources" />}
          >
            ソース台帳を見る
          </Button>
        </div>
      </section>

      {/* 今日の論点 */}
      {topArticle && (
        <section className="py-12">
          <p className="text-xs font-bold tracking-wide text-muted-foreground">
            今日の論点
          </p>
          <Link
            href={`/articles/${topArticle.slug}`}
            className="mt-3 block rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/40 sm:p-8"
          >
            <div className="flex items-center justify-between gap-3">
              <span className="text-xs font-medium text-accent">
                {ARTICLE_CATEGORY_LABELS[topArticle.category]}
              </span>
              <time className="text-xs text-muted-foreground">
                {topArticle.publishedAt}
              </time>
            </div>
            <h2 className="mt-3 text-2xl font-bold leading-snug text-foreground">
              {topArticle.title}
            </h2>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground">
              {topArticle.todaysFocus}
            </p>
            <span
              className={`mt-4 inline-flex rounded-full border px-2.5 py-1 text-xs font-semibold ${impactToneClass(
                topArticle.overallJapanImpact
              )}`}
            >
              日本インパクト {formatImpactScore(topArticle.overallJapanImpact)}
            </span>
          </Link>
        </section>
      )}

      {/* 最新記事一覧 */}
      {restArticles.length > 0 && (
        <section className="py-12">
          <div className="flex items-baseline justify-between">
            <p className="text-xs font-bold tracking-wide text-muted-foreground">
              最新記事
            </p>
            <Link
              href="/articles"
              className="text-sm text-accent hover:underline"
            >
              すべて見る →
            </Link>
          </div>
          <div className="mt-4 grid gap-5 sm:grid-cols-2">
            {restArticles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </section>
      )}

      {/* 人気の感情ワード分解 */}
      <section className="py-12">
        <div className="flex items-baseline justify-between">
          <p className="text-xs font-bold tracking-wide text-muted-foreground">
            人気の感情ワード分解
          </p>
          <Link href="/terms" className="text-sm text-accent hover:underline">
            辞典をすべて見る →
          </Link>
        </div>
        <div className="mt-4 grid gap-5 sm:grid-cols-3">
          {pickedTerms.map((term) => (
            <TermCard key={term.slug} term={term} />
          ))}
        </div>
      </section>

      {/* ソース台帳への導線 */}
      <section className="rounded-xl border border-border bg-secondary/40 p-8">
        <h2 className="text-lg font-bold text-foreground">
          情報源そのものを評価する
        </h2>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          本サイトでは、情報源のバイアスを消すのではなく可視化します。各メディア・シンクタンク・公式発信が
          どの国・立場から、何を強調し、何を隠しているのかをソース台帳で確認できます。
        </p>
        <Button
          nativeButton={false}
          className="mt-4"
          render={<Link href="/sources" />}
        >
          ソース台帳を見る
        </Button>
      </section>
    </div>
  );
}
