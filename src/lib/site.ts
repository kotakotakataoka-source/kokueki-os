import type { Metadata } from "next";

export const SITE_NAME = "国益分解";
export const SITE_TAGLINE =
  "感情論を排し、一次情報・多角的視点・日本の実利を整理する情報キュレーション";
export const SITE_DESCRIPTION =
  "情報源の立場を可視化し、事実・解釈・感情表現・日本への実利を分離して整理する国益ベースの情報キュレーションサイト。";
export const SITE_URL = "https://kokueki-os.vercel.app";

/**
 * 各ページの title/description から OpenGraph・Twitterカード用のメタデータも組み立てる。
 * これがないと子ページは layout.tsx の openGraph をそのまま継承してしまい、
 * SNSでシェアした際にどのページでもトップページのタイトルが表示される。
 */
export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path?: string;
}): Metadata {
  const fullTitle = `${title} ｜ ${SITE_NAME}`;
  return {
    title,
    description,
    openGraph: {
      title: fullTitle,
      description,
      url: path ? `${SITE_URL}${path}` : undefined,
      // Setting our own `openGraph` object replaces (not merges with) the
      // root layout's, so route segments without their own opengraph-image
      // file would otherwise end up with no og:image at all.
      images: ["/opengraph-image"],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
  };
}
