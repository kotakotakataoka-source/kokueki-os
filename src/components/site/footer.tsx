import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
        <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
          本サイトは「完全な中立」を名乗りません。すべての情報源には立場・国家利害・資本関係があるという前提に立ち、
          その立場を可視化したうえで、事実・解釈・感情表現・日本への実利・未確定要素を分離して提示します。
          最終的な判断は、読者自身が行うためのものです。
        </p>
        <p className="mt-4 text-xs text-muted-foreground/80">
          掲載内容は情報整理を目的としたものであり、投資判断・政策提言を断定するものではありません。
          編集方針の詳細は
          <Link href="/about" className="text-accent hover:underline">
            About / 編集方針
          </Link>
          をご覧ください。
        </p>
        <nav className="mt-6 flex flex-wrap gap-4 text-xs text-muted-foreground">
          <Link href="/start" className="hover:text-foreground hover:underline">
            初めての方へ
          </Link>
          <Link href="/about" className="hover:text-foreground hover:underline">
            About / 編集方針
          </Link>
          <Link href="/sources" className="hover:text-foreground hover:underline">
            ソース台帳
          </Link>
          <Link href="/terms" className="hover:text-foreground hover:underline">
            感情ワード辞典
          </Link>
        </nav>
        <p className="mt-6 text-xs text-muted-foreground/60">
          &copy; {new Date().getFullYear()} 国益分解
        </p>
      </div>
    </footer>
  );
}
