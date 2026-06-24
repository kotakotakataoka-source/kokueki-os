import { Badge } from "@/components/ui/badge";

export function TagBadge({ label }: { label: string }) {
  return (
    <Badge variant="outline" className="font-normal text-muted-foreground">
      #{label}
    </Badge>
  );
}
