import type { Metadata } from "next";
import { TermCard } from "@/components/term-card";
import { terms } from "@/data/terms";

export const metadata: Metadata = {
  title: "感情ワード辞典",
  description:
    "感情的・政治的な言葉を、実利ベースの構造に翻訳して整理する辞典。特定の陣営を断罪せず、言葉の裏にある構造を説明する。",
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
      <p className="text-xs font-bold tracking-wide text-muted-foreground">
        感情ワード辞典
      </p>
      <h1 className="mt-2 text-2xl font-bold text-foreground">
        言葉の裏にある構造を読む
      </h1>
      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
        この辞典は、政治的・地政学的な言葉を否定するためのものではありません。言葉の背後にある利害・構造・ナラティブを分解し、
        読者が感情ではなく構造で理解するための補助ツールです。ニュースやレポートに登場する感情的・政治的な言葉を実利ベースの言葉に翻訳し、
        特定の陣営を揶揄したり断定したりせず、冷静に構造を説明することを目的としています。
      </p>

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        {terms.map((term) => (
          <TermCard key={term.slug} term={term} />
        ))}
      </div>
    </div>
  );
}
