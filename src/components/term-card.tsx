import { Card, CardContent, CardHeader } from "@/components/ui/card";
import type { TermEntry } from "@/types/term";

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="grid gap-1 sm:grid-cols-[8rem_1fr] sm:gap-4">
      <dt className="text-xs font-semibold text-muted-foreground sm:pt-0.5">
        {label}
      </dt>
      <dd className="text-sm leading-relaxed text-foreground">{value}</dd>
    </div>
  );
}

export function TermCard({ term }: { term: TermEntry }) {
  return (
    <Card id={term.slug} className="h-full">
      <CardHeader>
        <h3 className="text-lg font-bold text-foreground">{term.term}</h3>
        <p className="text-sm text-muted-foreground">{term.surfaceMeaning}</p>
      </CardHeader>
      <CardContent>
        <dl className="grid gap-3 border-t border-border pt-4">
          <Row label="構造的な意味" value={term.structuralMeaning} />
          <Row label="誰の利益か" value={term.beneficiary} />
          <Row label="注意点" value={term.caution} />
          <Row label="使用例" value={term.example} />
        </dl>
      </CardContent>
    </Card>
  );
}
