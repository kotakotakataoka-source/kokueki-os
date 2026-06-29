import { ImageResponse } from "next/og";
import { articles } from "@/data/articles";
import { loadNotoSansJPSubset } from "@/lib/og-font";
import { SITE_NAME } from "@/lib/site";
import { ARTICLE_CATEGORY_LABELS } from "@/types/article";
import { formatImpactScore } from "@/lib/impact";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

function getArticle(slug: string) {
  return articles.find((article) => article.slug === slug);
}

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticle(slug);

  if (!article) {
    return new ImageResponse(<div style={{ width: "100%", height: "100%" }} />, size);
  }

  const categoryLabel = ARTICLE_CATEGORY_LABELS[article.category];
  const impactLabel = `日本への実利 ${formatImpactScore(article.overallJapanImpact)}`;
  const impactColor = article.overallJapanImpact > 0 ? "#2f5d46" : "#5b6373";

  const boldText = article.title;
  const regularText = `${categoryLabel}${impactLabel}${SITE_NAME}`;

  const [bold, regular] = await Promise.all([
    loadNotoSansJPSubset(boldText, 700),
    loadNotoSansJPSubset(regularText, 400),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background: "#f7f8fa",
        }}
      >
        <div
          style={{
            fontFamily: "Noto Sans JP",
            fontWeight: 400,
            fontSize: 28,
            color: "#5b6373",
            border: "2px solid #c7ccd6",
            borderRadius: 999,
            padding: "8px 28px",
            alignSelf: "flex-start",
          }}
        >
          {categoryLabel}
        </div>
        <div
          style={{
            fontFamily: "Noto Sans JP",
            fontWeight: 700,
            fontSize: 56,
            lineHeight: 1.35,
            color: "#232838",
            display: "flex",
          }}
        >
          {boldText}
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              fontFamily: "Noto Sans JP",
              fontWeight: 400,
              fontSize: 30,
              color: impactColor,
            }}
          >
            {impactLabel}
          </div>
          <div
            style={{
              fontFamily: "Noto Sans JP",
              fontWeight: 400,
              fontSize: 28,
              color: "#9aa1ad",
            }}
          >
            {SITE_NAME}
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Noto Sans JP", data: bold, weight: 700, style: "normal" },
        { name: "Noto Sans JP", data: regular, weight: 400, style: "normal" },
      ],
    },
  );
}
