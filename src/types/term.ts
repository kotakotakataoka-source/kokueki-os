/**
 * 感情ワード辞典の型定義。
 * 感情的・政治的な言葉を、実利ベースの構造に翻訳して提示するための型。
 */

export interface TermEntry {
  slug: string;
  /** 用語 */
  term: string;
  /** 表面的な意味（よく語られる建前としての意味） */
  surfaceMeaning: string;
  /** 構造的な意味（実際に機能している利害・力学） */
  structuralMeaning: string;
  /** 誰の利益に関係するか */
  beneficiary: string;
  /** 注意点（断定・陰謀論化を避けるための留保） */
  caution: string;
  /** 使用例（実際にどのような文脈で使われるか） */
  example: string;
}
