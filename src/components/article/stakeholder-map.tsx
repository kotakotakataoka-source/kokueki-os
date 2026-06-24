import type { Stakeholder } from "@/types/article";

export function StakeholderMap({
  stakeholders,
}: {
  stakeholders: Stakeholder[];
}) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {stakeholders.map((s) => (
        <div
          key={s.name}
          className="rounded-lg border border-border bg-card p-4"
        >
          <h4 className="text-sm font-bold text-foreground">{s.name}</h4>
          <p className="mt-1 text-xs text-muted-foreground">{s.role}</p>
          <dl className="mt-3 grid gap-2 border-t border-border pt-3">
            <div>
              <dt className="text-xs font-semibold text-accent">
                得られるもの・狙い
              </dt>
              <dd className="mt-0.5 text-sm leading-relaxed text-foreground">
                {s.interest}
              </dd>
            </div>
            <div>
              <dt className="text-xs font-semibold text-muted-foreground">
                負うリスク・コスト
              </dt>
              <dd className="mt-0.5 text-sm leading-relaxed text-foreground">
                {s.risk}
              </dd>
            </div>
          </dl>
        </div>
      ))}
    </div>
  );
}
