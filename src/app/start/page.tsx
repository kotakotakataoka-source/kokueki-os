import type { Metadata } from "next";
import Link from "next/link";
import { articles } from "@/data/articles";
import { FeedbackLink } from "@/components/feedback-link";
import type { Article } from "@/types/article";

export const metadata: Metadata = {
  title: "初めての方へ",
  description:
    "国際情勢を、感情ではなく構造と日本への実利で読むための入口。まず読む3本と、テーマ別の読む順番を紹介します。",
};

const WHAT_YOU_CAN_DO = [
  {
    title: "情報源の立場を可視化する",
    body: "「中立な情報源」を探すのではなく、各情報源がどの国・立場から発信しているかをソース台帳で確認します。",
  },
  {
    title: "事実・解釈・感情表現を分ける",
    body: "何が起きたか、誰がどう説明しているか、どの言葉が感情に働きかけているかを、記事の中で分けて示します。",
  },
  {
    title: "米中どちらかのナラティブに飲まれない",
    body: "米国側・中国側それぞれの主張を並べ、第三極（ASEAN・インド・欧州金融圏等）の視点も加えます。",
  },
  {
    title: "最後に「日本にどう効くか」で考える",
    body: "誰が正しいかではなく、経済・産業・安全保障など複数の軸で日本への実利を評価します。",
  },
];

const FIRST_THREE: { slug: string; purpose: string }[] = [
  {
    slug: "japan-strategic-autonomy-not-neutrality",
    purpose: "このサイト全体の思想（中立ではなく戦略的自律）を理解する",
  },
  {
    slug: "japan-media-us-narrative-bias",
    purpose: "このサイトがソース台帳・感情ワード辞典を持つ理由を理解する",
  },
  {
    slug: "us-china-semiconductor-controls",
    purpose: "記事テンプレート（事実→各陣営の見方→日本への実利）の実例を見る",
  },
];

const THEME_GROUPS: { heading: string; slugs: string[] }[] = [
  {
    heading: "米中対立を理解する",
    slugs: [
      "us-china-semiconductor-controls",
      "ai-export-controls-tech-sovereignty",
      "hegemonism-chinese-state-media",
    ],
  },
  {
    heading: "日本の戦略的自律を理解する",
    slugs: [
      "japan-strategic-autonomy-not-neutrality",
      "japan-us-security-treaty-diplomatic-space",
      "defense-spending-media-views",
    ],
  },
  {
    heading: "資源・サプライチェーンを理解する",
    slugs: [
      "rare-earth-china-dependency",
      "taiwan-contingency-supply-chain",
      "hormuz-strait-energy-security",
    ],
  },
  {
    heading: "情報空間・ナラティブを理解する",
    slugs: [
      "japan-media-us-narrative-bias",
      "hegemonism-chinese-state-media",
      "brics-expansion-de-dollarization",
    ],
  },
];

const READING_RULES = [
  "まず「何が起きたか」を見る",
  "次に「誰がどう語っているか」を見る",
  "感情ワードをそのまま受け取らない",
  "最後に「日本にとって何がプラスで何がマイナスか」を見る",
];

function findArticle(slug: string): Article | undefined {
  return articles.find((article) => article.slug === slug);
}

function ThemeGroup({ heading, slugs }: { heading: string; slugs: string[] }) {
  const items = slugs
    .map((slug) => findArticle(slug))
    .filter((article): article is Article => article !== undefined);

  return (
    <div className="rounded-lg border border-border bg-card p-5">
      <h3 className="text-base font-bold text-foreground">{heading}</h3>
      <ol className="mt-3 grid gap-3">
        {items.map((article, index) => (
          <li key={article.slug} className="flex gap-3">
            <span className="shrink-0 text-xs font-bold text-accent">
              {index + 1}
            </span>
            <Link
              href={`/articles/${article.slug}`}
              className="text-sm font-medium leading-snug text-foreground hover:text-primary hover:underline"
            >
              {article.title}
            </Link>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default function StartPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
      <p className="text-xs font-bold tracking-wide text-muted-foreground">
        初めての方へ
      </p>
      <h1 className="mt-2 text-2xl font-bold text-foreground sm:text-3xl">
        国際情勢を、感情ではなく構造と日本への実利で読むための入口。
      </h1>

      {/* 1. このサイトでできること */}
      <section className="mt-10">
        <h2 className="text-lg font-bold text-foreground">
          このサイトでできること
        </h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {WHAT_YOU_CAN_DO.map((item) => (
            <div
              key={item.title}
              className="rounded-lg border border-border bg-card p-4"
            >
              <p className="text-sm font-bold text-foreground">{item.title}</p>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 2. まず読む3本 */}
      <section className="mt-12">
        <h2 className="text-lg font-bold text-foreground">まず読む3本</h2>
        <div className="mt-4 grid gap-5 sm:grid-cols-3">
          {FIRST_THREE.map(({ slug, purpose }, index) => {
            const article = findArticle(slug);
            if (!article) return null;
            return (
              <Link
                key={slug}
                href={`/articles/${slug}`}
                className="block rounded-lg border border-border bg-card p-5 transition-colors hover:border-primary/40"
              >
                <span className="text-xs font-bold text-accent">
                  {index + 1}本目
                </span>
                <h3 className="mt-2 text-base font-bold leading-snug text-foreground">
                  {article.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {article.summary}
                </p>
                <p className="mt-3 rounded-md bg-secondary px-3 py-2 text-xs leading-relaxed text-secondary-foreground">
                  読む目的：{purpose}
                </p>
              </Link>
            );
          })}
        </div>
      </section>

      {/* 3. テーマ別の読む順番 */}
      <section className="mt-12">
        <h2 className="text-lg font-bold text-foreground">
          テーマ別の読む順番
        </h2>
        <div className="mt-4 grid gap-5 sm:grid-cols-2">
          {THEME_GROUPS.map((group) => (
            <ThemeGroup key={group.heading} {...group} />
          ))}
        </div>
      </section>

      {/* 4. 読み方のルール */}
      <section className="mt-12 rounded-xl border border-border bg-secondary/40 p-6 sm:p-8">
        <h2 className="text-lg font-bold text-foreground">読み方のルール</h2>
        <ol className="mt-4 grid gap-3">
          {READING_RULES.map((rule, index) => (
            <li key={rule} className="flex gap-3">
              <span className="shrink-0 text-sm font-bold text-accent">
                {index + 1}
              </span>
              <span className="text-sm leading-relaxed text-foreground">
                {rule}
              </span>
            </li>
          ))}
        </ol>
      </section>

      {/* 5. フィードバック導線 */}
      <div className="mt-12">
        <FeedbackLink />
      </div>
    </div>
  );
}
