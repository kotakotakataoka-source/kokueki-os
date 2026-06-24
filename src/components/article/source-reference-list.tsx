import Link from "next/link";
import type { SourceReference } from "@/types/article";
import type { SourceEntry } from "@/types/source";

export interface ResolvedSourceReference {
  reference: SourceReference;
  source: SourceEntry | undefined;
}

export function SourceReferenceList({
  items,
}: {
  items: ResolvedSourceReference[];
}) {
  return (
    <ul className="grid gap-3">
      {items.map(({ reference, source }) => (
        <li
          key={reference.url}
          className="rounded-lg border border-border bg-card p-4"
        >
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
      ))}
    </ul>
  );
}
