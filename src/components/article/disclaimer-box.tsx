import Link from "next/link";

export function DisclaimerBox({ publishedAt }: { publishedAt: string }) {
  return (
    <div className="rounded-lg border border-border bg-secondary/40 p-5">
      <p className="text-xs font-bold text-muted-foreground">この記事について</p>
      <ul className="mt-3 grid gap-2 text-xs leading-relaxed text-muted-foreground">
        <li>
          本記事は情報整理・構造分析を目的としたものであり、特定の投資判断を推奨するものではありません。
        </li>
        <li>
          特定の国家・政党・思想への支持や反対を目的としたものではありません。各陣営の見方は、立場を理解するための整理として提示しています。
        </li>
        <li>本記事の内容は公開時点（{publishedAt}）の情報に基づいています。その後の状況変化により内容が古くなっている可能性があります。</li>
        <li>
          判断にあたっては、本記事を出発点としつつ、本文中の一次情報・出典を読者自身で確認することを推奨します。
        </li>
      </ul>
      <p className="mt-3 text-xs text-muted-foreground">
        サイト全体の編集方針については
        <Link href="/about" className="text-accent hover:underline">
          About / 編集方針
        </Link>
        をご覧ください。
      </p>
    </div>
  );
}
