import Link from "next/link";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { TagBadge } from "@/components/tag-badge";
import { ARTICLE_CATEGORY_LABELS, type Article } from "@/types/article";
import { formatImpactScore, impactToneClass } from "@/lib/impact";

export function ArticleCard({ article }: { article: Article }) {
  return (
    <Link href={`/articles/${article.slug}`} className="block group">
      <Card className="h-full transition-colors hover:border-primary/40">
        <CardHeader className="gap-3">
          <div className="flex items-center justify-between gap-3">
            <span className="text-xs font-medium tracking-wide text-accent">
              {ARTICLE_CATEGORY_LABELS[article.category]}
            </span>
            <time
              dateTime={article.publishedAt}
              className="text-xs text-muted-foreground"
            >
              {article.publishedAt}
            </time>
          </div>
          <h3 className="text-lg font-bold leading-snug text-foreground group-hover:text-primary">
            {article.title}
          </h3>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <p className="text-sm leading-relaxed text-muted-foreground">
            {article.summary}
          </p>
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap gap-2">
              {article.tags.slice(0, 3).map((tag) => (
                <TagBadge key={tag} label={tag} />
              ))}
            </div>
            <span
              className={`shrink-0 rounded-full border px-2.5 py-1 text-xs font-semibold ${impactToneClass(
                article.overallJapanImpact
              )}`}
            >
              日本インパクト {formatImpactScore(article.overallJapanImpact)}
            </span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
