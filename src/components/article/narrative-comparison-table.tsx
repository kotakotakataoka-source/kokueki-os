import { Fragment } from "react";
import type { NarrativeView } from "@/types/article";

const ROWS: { key: keyof NarrativeView; label: string }[] = [
  { key: "emphasis", label: "強調点" },
  { key: "hidden", label: "隠す点" },
  { key: "actualInterest", label: "実際の利害" },
];

export function NarrativeComparisonTable({
  views,
}: {
  views: NarrativeView[];
}) {
  return (
    <div className="overflow-x-auto rounded-lg border border-border">
      <div
        className="grid min-w-[640px]"
        style={{
          gridTemplateColumns: `8rem repeat(${views.length}, minmax(13rem, 1fr))`,
        }}
      >
        {/* ヘッダー行 */}
        <div className="border-b border-border bg-muted/50 p-3" />
        {views.map((view) => (
          <div
            key={view.campName}
            className="border-b border-border border-l bg-primary p-3 text-sm font-bold text-primary-foreground"
          >
            {view.campName}
          </div>
        ))}

        {/* データ行 */}
        {ROWS.map((row, rowIdx) => (
          <Fragment key={row.key}>
            <div
              className={`p-3 text-xs font-semibold text-muted-foreground ${
                rowIdx < ROWS.length - 1 ? "border-b border-border" : ""
              }`}
            >
              {row.label}
            </div>
            {views.map((view) => (
              <div
                key={`${view.campName}-${row.key}`}
                className={`border-l p-3 text-sm leading-relaxed text-foreground ${
                  rowIdx < ROWS.length - 1 ? "border-b border-border" : ""
                }`}
              >
                {view[row.key] as string}
              </div>
            ))}
          </Fragment>
        ))}

        {/* 誘導語 行 */}
        <div className="border-t border-border p-3 text-xs font-semibold text-muted-foreground">
          誘導語
        </div>
        {views.map((view) => (
          <div
            key={`${view.campName}-framing`}
            className="border-t border-l border-border p-3"
          >
            <div className="flex flex-wrap gap-1.5">
              {view.framingWords.map((word) => (
                <span
                  key={word}
                  className="rounded-full bg-secondary px-2 py-0.5 text-xs text-secondary-foreground"
                >
                  「{word}」
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
