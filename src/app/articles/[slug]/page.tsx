import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { TagBadge } from "@/components/tag-badge";
import { SectionHeading } from "@/components/article/section-heading";
import { NarrativeComparisonTable } from "@/components/article/narrative-comparison-table";
import {
  EmotionWordBreakdown,
  type EmotionWordBreakdownItem,
} from "@/components/article/emotion-word-breakdown";
import { JapanImpactMeter } from "@/components/article/japan-impact-meter";
import { StakeholderMap } from "@/components/article/stakeholder-map";
import {
  SourceReferenceList,
  type ResolvedSourceReference,
} from "@/components/article/source-reference-list";
import { UncertaintyBox } from "@/components/article/uncertainty-box";
import { DisclaimerBox } from "@/components/article/disclaimer-box";
import { FeedbackLink } from "@/components/feedback-link";
import { articles } from "@/data/articles";
import { terms } from "@/data/terms";
import { sources } from "@/data/sources";
import { ARTICLE_CATEGORY_LABELS } from "@/types/article";
import { formatImpactScore, impactToneClass } from "@/lib/impact";
import { pageMetadata } from "@/lib/site";

interface PageParams {
  slug: string;
}

export function generateStaticParams(): PageParams[] {
  return articles.map((article) => ({ slug: article.slug }));
}

function getArticle(slug: string) {
  return articles.find((article) => article.slug === slug);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<PageParams>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) {
    return { title: "記事が見つかりません" };
  }
  const base = pageMetadata({
    title: article.title,
    description: article.summary,
    path: `/articles/${slug}`,
  });
  // Don't carry over the generic `images` fallback: this route has its own
  // colocated opengraph-image.tsx, which Next attaches automatically as
  // long as the metadata object doesn't set `images` itself.
  return {
    ...base,
    openGraph: {
      title: base.openGraph?.title,
      description: base.openGraph?.description,
      url: base.openGraph?.url,
      type: "article",
      publishedTime: article.publishedAt,
      tags: article.tags,
    },
  };
}

export default async function ArticleDetailPage({
  params,
}: {
  params: Promise<PageParams>;
}) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) {
    notFound();
  }

  const emotionWordItems: EmotionWordBreakdownItem[] = article.emotionWords
    .map((ref) => {
      const term = terms.find((t) => t.slug === ref.termSlug);
      return term ? { term, contextNote: ref.contextNote } : null;
    })
    .filter((item): item is EmotionWordBreakdownItem => item !== null);

  const sourceReferenceItems: ResolvedSourceReference[] =
    article.primarySources.map((reference) => ({
      reference,
      source: sources.find((s) => s.slug === reference.sourceSlug),
    }));

  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      {/* 記事ヘッダー */}
      <header className="border-b border-border pb-8">
        <div className="flex items-center justify-between gap-3">
          <span className="text-xs font-semibold text-accent">
            {ARTICLE_CATEGORY_LABELS[article.category]}
          </span>
          <time className="text-xs text-muted-foreground">
            {article.publishedAt}
          </time>
        </div>
        <h1 className="mt-3 text-2xl font-bold leading-snug text-foreground sm:text-3xl">
          {article.title}
        </h1>
        <p className="mt-3 text-base leading-relaxed text-muted-foreground">
          {article.summary}
        </p>
        <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap gap-2">
            {article.tags.map((tag) => (
              <TagBadge key={tag} label={tag} />
            ))}
          </div>
          <span
            className={`rounded-full border px-2.5 py-1 text-xs font-semibold ${impactToneClass(
              article.overallJapanImpact
            )}`}
          >
            日本インパクト {formatImpactScore(article.overallJapanImpact)}
          </span>
        </div>
      </header>

      <div className="grid min-w-0 gap-10 py-10">
        <section>
          <SectionHeading index="1" title="今日の論点" />
          <p className="text-sm leading-relaxed text-foreground">
            {article.todaysFocus}
          </p>
        </section>

        <section>
          <SectionHeading index="2" title="何が起きたのか" />
          <p className="text-sm leading-relaxed text-foreground">
            {article.whatHappened}
          </p>
        </section>

        <section>
          <SectionHeading index="3" title="一次情報・元データ" />
          <SourceReferenceList items={sourceReferenceItems} />
        </section>

        <section>
          <SectionHeading index="4" title="各陣営の見方" />
          <NarrativeComparisonTable views={article.narrativeViews} />
        </section>

        <section>
          <SectionHeading index="5" title="感情ワード・レトリックの分解" />
          <EmotionWordBreakdown items={emotionWordItems} />
        </section>

        <section>
          <SectionHeading index="6" title="利害関係者マップ" />
          <StakeholderMap stakeholders={article.stakeholders} />
        </section>

        <section>
          <SectionHeading index="7" title="日本への影響" />
          <JapanImpactMeter assessment={article.japanImpact} />
        </section>

        <section>
          <SectionHeading index="8" title="投資・産業への示唆" />
          <p className="text-sm leading-relaxed text-foreground">
            {article.investmentImplications}
          </p>
        </section>

        <section>
          <SectionHeading index="9" title="未確定要素" />
          <UncertaintyBox points={article.uncertainties} />
        </section>

        <section>
          <SectionHeading index="10" title="今後見るべき指標" />
          <ul className="grid gap-3">
            {article.keyIndicators.map((indicator) => (
              <li
                key={indicator.label}
                className="rounded-lg border border-border bg-card p-4"
              >
                <p className="text-sm font-bold text-foreground">
                  {indicator.label}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {indicator.description}
                </p>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <SectionHeading index="11" title="結論" />
          <p className="text-sm leading-relaxed text-foreground">
            {article.conclusion}
          </p>
        </section>

        <section className="rounded-xl border border-dashed border-accent/40 bg-accent/5 p-6">
          <SectionHeading index="12" title="読者への問い" />
          <p className="text-sm font-medium leading-relaxed text-foreground">
            {article.readerQuestion}
          </p>
        </section>
      </div>

      <DisclaimerBox publishedAt={article.publishedAt} />

      <div className="mt-6">
        <FeedbackLink />
      </div>

      <footer className="mt-8 border-t border-border pt-6">
        <Link href="/articles" className="text-sm text-accent hover:underline">
          ← 記事一覧に戻る
        </Link>
      </footer>
    </article>
  );
}
