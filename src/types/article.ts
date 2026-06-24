/**
 * 記事の型定義。
 * 事実・解釈・感情表現・日本への実利・未確定要素を分離するテンプレートを構造化する。
 */

export type ArticleCategory =
  | "economic-security" // 経済安全保障
  | "geopolitics" // 地政学・安全保障
  | "energy-security" // エネルギー安全保障
  | "technology" // 技術・産業
  | "trade"; // 貿易・通商

export const ARTICLE_CATEGORY_LABELS: Record<ArticleCategory, string> = {
  "economic-security": "経済安全保障",
  geopolitics: "地政学・安全保障",
  "energy-security": "エネルギー安全保障",
  technology: "技術・産業",
  trade: "貿易・通商",
};

/** 各陣営の見方（ナラティブ比較） */
export interface NarrativeView {
  /** 陣営名（例：米国／中国公式／日本政策圏／ASEAN） */
  campName: string;
  /** 強調点 */
  emphasis: string;
  /** 隠す点・触れない点 */
  hidden: string;
  /** 読者を誘導する言葉 */
  framingWords: string[];
  /** 実際の利害 */
  actualInterest: string;
}

/** 記事内で参照する感情ワード（詳細はterms.tsの該当slugに紐づく） */
export interface EmotionWordRef {
  termSlug: string;
  /** この記事の文脈における補足ノート */
  contextNote: string;
}

export type ImpactAxis =
  | "economy"
  | "industry"
  | "security"
  | "financialMarket"
  | "techSovereignty"
  | "energy"
  | "supplyChain"
  | "diplomacy";

export const IMPACT_AXIS_LABELS: Record<ImpactAxis, string> = {
  economy: "経済",
  industry: "産業",
  security: "安全保障",
  financialMarket: "金融市場",
  techSovereignty: "技術主権",
  energy: "エネルギー",
  supplyChain: "サプライチェーン",
  diplomacy: "外交余地",
};

export interface JapanImpactScore {
  axis: ImpactAxis;
  /** -5(大きなマイナス) 〜 +5(大きなプラス) */
  score: number;
}

export interface JapanImpactAssessment {
  scores: JapanImpactScore[];
  shortTerm: string;
  midTerm: string;
  longTerm: string;
}

export interface Stakeholder {
  name: string;
  /** 立場・役割 */
  role: string;
  /** 得られるもの・狙い */
  interest: string;
  /** 失うリスク・負担 */
  risk: string;
}

export interface SourceReference {
  /** sources.ts の SourceEntry.slug への参照 */
  sourceSlug: string;
  /** 参照した発表・記事のタイトル */
  title: string;
  url: string;
  note?: string;
}

export interface UncertaintyPoint {
  point: string;
  whyUncertain: string;
}

export interface KeyIndicator {
  label: string;
  description: string;
}

export interface Article {
  slug: string;
  title: string;
  category: ArticleCategory;
  /** ISO 8601 (YYYY-MM-DD) */
  publishedAt: string;
  /** 一覧カード用の概要 */
  summary: string;
  tags: string[];
  /** 一覧カード表示用の総合スコア(-5〜+5)。詳細は japanImpact.scores 参照 */
  overallJapanImpact: number;

  // --- 記事テンプレート ---
  /** 1. 今日の論点 */
  todaysFocus: string;
  /** 2. 何が起きたのか */
  whatHappened: string;
  /** 3. 一次情報・元データ */
  primarySources: SourceReference[];
  /** 4. 各陣営の見方 */
  narrativeViews: NarrativeView[];
  /** 5. 感情ワード・レトリックの分解 */
  emotionWords: EmotionWordRef[];
  /** 6. 利害関係者マップ */
  stakeholders: Stakeholder[];
  /** 7. 日本への影響 */
  japanImpact: JapanImpactAssessment;
  /** 8. 投資・産業への示唆 */
  investmentImplications: string;
  /** 9. 未確定要素 */
  uncertainties: UncertaintyPoint[];
  /** 10. 今後見るべき指標 */
  keyIndicators: KeyIndicator[];
  /** 11. 結論 */
  conclusion: string;
  /** 12. 読者への問い */
  readerQuestion: string;
}
