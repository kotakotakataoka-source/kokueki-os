import Link from "next/link";
import type { TermEntry } from "@/types/term";

export interface EmotionWordBreakdownItem {
  term: TermEntry;
  contextNote: string;
}

export function EmotionWordBreakdown({
  items,
}: {
  items: EmotionWordBreakdownItem[];
}) {
  return (
    <div className="grid gap-4">
      {items.map(({ term, contextNote }) => (
        <div
          key={term.slug}
          className="rounded-lg border border-border bg-card p-4"
        >
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <h4 className="text-base font-bold text-foreground">
              「{term.term}」
            </h4>
            <Link
              href={`/terms#${term.slug}`}
              className="text-xs text-accent hover:underline"
            >
              辞典で詳しく見る →
            </Link>
          </div>
          <p className="mt-2 text-sm text-muted-foreground">
            表面的な意味：{term.surfaceMeaning}
          </p>
          <p className="mt-1 text-sm font-medium text-foreground">
            構造的な意味：{term.structuralMeaning}
          </p>
          <p className="mt-2 rounded-md bg-muted px-3 py-2 text-sm leading-relaxed text-foreground">
            この記事での使われ方：{contextNote}
          </p>
        </div>
      ))}
    </div>
  );
}
