import type { UncertaintyPoint } from "@/types/article";

export function UncertaintyBox({ points }: { points: UncertaintyPoint[] }) {
  return (
    <div className="rounded-lg border border-dashed border-border bg-secondary/40 p-4">
      <p className="text-xs font-bold text-muted-foreground">
        この記事の時点では断定できないこと
      </p>
      <ul className="mt-3 grid gap-3">
        {points.map((p) => (
          <li key={p.point} className="text-sm">
            <p className="font-medium text-foreground">{p.point}</p>
            <p className="mt-1 text-muted-foreground">{p.whyUncertain}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
