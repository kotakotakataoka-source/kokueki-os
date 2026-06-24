import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/site/header";
import { Footer } from "@/components/site/footer";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const SITE_NAME = "国益分解";
const SITE_TAGLINE =
  "感情論を排し、一次情報・多角的視点・日本の実利を整理する情報キュレーション";

export const metadata: Metadata = {
  title: {
    default: `${SITE_NAME} ｜ ${SITE_TAGLINE}`,
    template: `%s ｜ ${SITE_NAME}`,
  },
  description:
    "情報源の立場を可視化し、事実・解釈・感情表現・日本への実利を分離して整理する国益ベースの情報キュレーションサイト。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${notoSansJP.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
