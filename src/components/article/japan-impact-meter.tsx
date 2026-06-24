import { IMPACT_AXIS_LABELS, type JapanImpactAssessment } from "@/types/article";
import { formatImpactScore } from "@/lib/impact";

function ImpactBar({ score }: { score: number }) {
  const halfWidthPercent = (Math.min(Math.abs(score), 5) / 5) * 50;
  const isPositive = score > 0;
  const isNegative = score < 0;

  return (
    <div className="relative h-2 w-full rounded-full bg-muted">
      <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-border" />
      {isPositive && (
        <div
          className="absolute top-0 h-full rounded-r-full bg-accent"
          style={{ left: "50%", width: `${halfWidthPercent}%` }}
        />
      )}
      {isNegative && (
        <div
          className="absolute top-0 h-full rounded-l-full bg-foreground/40"
          style={{ right: "50%", width: `${halfWidthPercent}%` }}
        />
      )}
    </div>
  );
}

export function JapanImpactMeter({
  assessment,
}: {
  assessment: JapanImpactAssessment;
}) {
  return (
    <div className="grid gap-6">
      <div className="grid gap-3">
        {assessment.scores.map(({ axis, score }) => (
          <div key={axis} className="grid grid-cols-[5.5rem_1fr_3rem] items-center gap-3 sm:grid-cols-[7rem_1fr_3rem]">
            <span className="text-xs font-medium text-muted-foreground">
              {IMPACT_AXIS_LABELS[axis]}
            </span>
            <ImpactBar score={score} />
            <span className="text-right text-xs font-bold text-foreground">
              {formatImpactScore(score)}
            </span>
          </div>
        ))}
      </div>

      <div className="grid gap-3 sm:grid-cols-3">
        <div className="rounded-lg border border-border bg-card p-4">
          <p className="text-xs font-bold text-accent">短期</p>
          <p className="mt-2 text-sm leading-relaxed text-foreground">
            {assessment.shortTerm}
          </p>
        </div>
        <div className="rounded-lg border border-border bg-card p-4">
          <p className="text-xs font-bold text-accent">中期</p>
          <p className="mt-2 text-sm leading-relaxed text-foreground">
            {assessment.midTerm}
          </p>
        </div>
        <div className="rounded-lg border border-border bg-card p-4">
          <p className="text-xs font-bold text-accent">長期</p>
          <p className="mt-2 text-sm leading-relaxed text-foreground">
            {assessment.longTerm}
          </p>
        </div>
      </div>
    </div>
  );
}
