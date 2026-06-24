import Link from "next/link";

const NAV_LINKS = [
  { href: "/articles", label: "記事一覧" },
  { href: "/sources", label: "ソース台帳" },
  { href: "/terms", label: "感情ワード辞典" },
  { href: "/about", label: "About" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4 sm:px-6">
        <Link href="/" className="flex flex-col">
          <span className="text-lg font-bold tracking-tight text-primary">
            国益分解
          </span>
          <span className="text-[11px] text-muted-foreground">
            Structural &amp; National-Interest Briefing
          </span>
        </Link>
        <nav className="flex items-center gap-4 sm:gap-6">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
