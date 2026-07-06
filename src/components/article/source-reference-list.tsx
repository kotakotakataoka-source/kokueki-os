import Link from "next/link";
import type { SourceReference, SourceTier } from "@/types/article";
import { SOURCE_TIER_LABELS } from "@/types/article";
import type { SourceEntry } from "@/types/source";

export interface ResolvedSourceReference {
  reference: SourceReference;
  source: SourceEntry | undefined;
}

const TIER_ORDER: SourceTier[] = ["primary", "secondary", "analysis"];

const TIER_DESCRIPTION: Record<SourceTier, string> = {
  primary: "政府・国際機関の公式文書、当事国メディアの発表",
  secondary: "事実報道（Reuters・CNA等）",
  analysis: "シンクタンク・専門家による解釈・論評",
};

function SourceCard({ reference, source }: ResolvedSourceReference) {
  return (
    <li className="rounded-lg border border-border bg-card p-4">
      <a
        href={reference.url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm font-bold text-foreground hover:text-primary hover:underline"
      >
        {reference.title} ↗
      </a>
      <div className="mt-1 flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
        <span>出典：</span>
        {source ? (
          <Link
            href={`/sources#${source.slug}`}
            className="text-accent hover:underline"
          >
            {source.name}（ソース台帳で確認）
          </Link>
        ) : (
          <span>{reference.sourceSlug}</span>
        )}
      </div>
      {reference.note && (
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          {reference.note}
        </p>
      )}
    </li>
  );
}

export function SourceReferenceList({
  items,
}: {
  items: ResolvedSourceReference[];
}) {
  const hasTiers = items.some((i) => i.reference.tier);

  if (!hasTiers) {
    return (
      <ul className="grid gap-3">
        {items.map((item) => (
          <SourceCard key={item.reference.url} {...item} />
        ))}
      </ul>
    );
  }

  const grouped = TIER_ORDER.reduce<Record<SourceTier, ResolvedSourceReference[]>>(
    (acc, tier) => {
      acc[tier] = items.filter((i) => i.reference.tier === tier);
      return acc;
    },
    { primary: [], secondary: [], analysis: [] },
  );
  const ungrouped = items.filter((i) => !i.reference.tier);

  return (
    <div className="grid gap-6">
      {TIER_ORDER.filter((tier) => grouped[tier].length > 0).map((tier) => (
        <div key={tier}>
          <div className="mb-2">
            <span className="text-xs font-bold tracking-wide text-foreground">
              {SOURCE_TIER_LABELS[tier]}
            </span>
            <span className="ml-2 text-xs text-muted-foreground">
              — {TIER_DESCRIPTION[tier]}
            </span>
          </div>
          <ul className="grid gap-3">
            {grouped[tier].map((item) => (
              <SourceCard key={item.reference.url} {...item} />
            ))}
          </ul>
        </div>
      ))}
      {ungrouped.length > 0 && (
        <ul className="grid gap-3">
          {ungrouped.map((item) => (
            <SourceCard key={item.reference.url} {...item} />
          ))}
        </ul>
      )}
    </div>
  );
}
