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
    <>
      {/* モバイル：陣営ごとに積み重ねるカード表示（横スクロール不要） */}
      <div className="grid gap-4 sm:hidden">
        {views.map((view) => (
          <div key={view.campName} className="rounded-lg border border-border">
            <div className="rounded-t-lg bg-primary p-3 text-sm font-bold text-primary-foreground">
              {view.campName}
            </div>
            <dl className="grid gap-3 p-3">
              {ROWS.map((row) => (
                <div key={row.key}>
                  <dt className="text-xs font-semibold text-muted-foreground">
                    {row.label}
                  </dt>
                  <dd className="mt-1 text-sm leading-relaxed text-foreground">
                    {view[row.key] as string}
                  </dd>
                </div>
              ))}
              <div>
                <dt className="text-xs font-semibold text-muted-foreground">誘導語</dt>
                <dd className="mt-1 flex flex-wrap gap-1.5">
                  {view.framingWords.map((word) => (
                    <span
                      key={word}
                      className="rounded-full bg-secondary px-2 py-0.5 text-xs text-secondary-foreground"
                    >
                      「{word}」
                    </span>
                  ))}
                </dd>
              </div>
            </dl>
          </div>
        ))}
      </div>

      {/* sm以上：横並びの比較表（min-w-0で親のCSS Gridに幅を強制しない） */}
      <div className="hidden min-w-0 overflow-x-auto rounded-lg border border-border sm:block">
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
    </>
  );
}
