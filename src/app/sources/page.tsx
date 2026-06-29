import { SourcesExplorer } from "@/components/sources-explorer";
import { sources } from "@/data/sources";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata({
  title: "ソース台帳",
  description:
    "情報源のバイアスを消すのではなく可視化する。各情報源の立場・強み・注意すべきバイアス・使い方を整理した台帳。",
  path: "/sources",
});

export default function SourcesPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
      <p className="text-xs font-bold tracking-wide text-muted-foreground">
        ソース台帳
      </p>
      <h1 className="mt-2 text-2xl font-bold text-foreground">
        情報源そのものを評価する
      </h1>
      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
        このページは、情報源を「中立／偏向」で単純に分類するものではありません。各情報源がどの立場から世界を見ているかを確認し、
        記事を読む際の補助線として使うための台帳です。完全に中立な情報源は存在しないという前提のもと、
        「信頼できる／できない」の二分法ではなく、何を強調し、何を隠しているのかを可視化します。
        中国公式メディア・政府発表は「公式ナラティブ確認用」として別枠で扱います。
      </p>

      <div className="mt-8">
        <SourcesExplorer sources={sources} />
      </div>
    </div>
  );
}
