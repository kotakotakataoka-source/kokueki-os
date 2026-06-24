import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SOURCE_CATEGORY_LABELS, type SourceEntry } from "@/types/source";

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-xs font-semibold text-muted-foreground">{label}</dt>
      <dd className="mt-1 text-sm leading-relaxed text-foreground">{value}</dd>
    </div>
  );
}

export function SourceCard({ source }: { source: SourceEntry }) {
  const isOfficialNarrative = source.category === "china-official";

  return (
    <Card className="h-full">
      <CardHeader className="gap-2">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-base font-bold text-foreground">
              {source.name}
            </h3>
            {source.nameEn && (
              <p className="text-xs text-muted-foreground">{source.nameEn}</p>
            )}
          </div>
          <Badge variant="secondary" className="shrink-0">
            {SOURCE_CATEGORY_LABELS[source.category]}
          </Badge>
        </div>
        <p className="text-xs text-muted-foreground">{source.region}</p>
        {isOfficialNarrative && (
          <p className="rounded-md bg-muted px-3 py-2 text-xs leading-relaxed text-muted-foreground">
            この情報源は「信頼できる情報源」ではなく、公式ナラティブ確認用として扱います。
          </p>
        )}
      </CardHeader>
      <CardContent>
        <dl className="grid gap-4">
          <Field label="主な視点" value={source.perspective} />
          <Field label="強み" value={source.strengths} />
          <Field label="注意すべきバイアス" value={source.biasWarning} />
          <Field label="このサイトでの使い方" value={source.usageNote} />
        </dl>
      </CardContent>
    </Card>
  );
}
