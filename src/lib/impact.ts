/**
 * 日本インパクトスコア(-5〜+5)の表示補助。
 * 警戒色（赤・黄）は使わず、深緑＝プラス／スレート＝マイナスで方向を示す。
 */
export function formatImpactScore(score: number): string {
  return score > 0 ? `+${score}` : `${score}`;
}

export function impactToneClass(score: number): string {
  if (score > 0) return "bg-accent/10 text-accent border-accent/30";
  if (score < 0) return "bg-muted text-muted-foreground border-border";
  return "bg-secondary text-secondary-foreground border-border";
}
