/**
 * ソース台帳の型定義。
 * 「信頼できる/できない」の二分ではなく、立場・強み・バイアスを並記する前提の構造。
 */

export type SourceCategory =
  | "primary-data" // 一次データ・統計機関
  | "japan-policy" // 日本の政策・経済系シンクタンク
  | "third-pole" // 第三極・グローバルサウスの視点
  | "europe-finance" // 欧州・金融・国際秩序視点
  | "us-policy" // 米国政策圏・戦略コミュニティ
  | "china-official"; // 中国側の公式ナラティブ取得源

export interface SourceEntry {
  slug: string;
  /** 情報源名（日本語表記） */
  name: string;
  /** 原語・英語表記 */
  nameEn?: string;
  /** 国・地域 */
  region: string;
  category: SourceCategory;
  /** 主な視点 */
  perspective: string;
  /** 強み */
  strengths: string;
  /** 注意すべきバイアス */
  biasWarning: string;
  /** このサイトでの使い方 */
  usageNote: string;
  url?: string;
}

export const SOURCE_CATEGORY_LABELS: Record<SourceCategory, string> = {
  "primary-data": "一次データ・統計機関",
  "japan-policy": "日本政策圏",
  "third-pole": "第三極・グローバルサウス",
  "europe-finance": "欧州・金融",
  "us-policy": "米国政策圏",
  "china-official": "中国公式ナラティブ",
};

export const SOURCE_CATEGORY_DESCRIPTIONS: Record<SourceCategory, string> = {
  "primary-data": "政治的な言葉ではなく、数字で現実を確認するための一次データ・統計機関。",
  "japan-policy": "日本の政策圏・産業政策・安全保障政策の視点を把握するためのシンクタンク。",
  "third-pole": "米中どちらにも完全には寄らない、アジア・インド・中東などの視点。",
  "europe-finance": "米国の国内政治的な正義論とは異なる、金融・外交・軍事・制度設計の視点。",
  "us-policy": "中立情報源ではなく、米国エリート層・政策立案者の思考を読むための資料。",
  "china-official": "信じるためではなく、中国政府の公式な大義名分・正当化ロジックを確認するための資料。",
};
