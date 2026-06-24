export function SectionHeading({
  index,
  title,
}: {
  index: string;
  title: string;
}) {
  return (
    <div className="mb-4 flex items-baseline gap-3">
      <span className="text-sm font-bold text-accent">{index}</span>
      <h2 className="text-xl font-bold text-foreground">{title}</h2>
    </div>
  );
}
