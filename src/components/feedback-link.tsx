/**
 * フィードバック導線。
 * フォームURLが未設定の間は何も表示しない（UIを壊さないため）。
 * 用意ができたら下の値を Google フォーム等のURLに置き換える。
 */
const FEEDBACK_FORM_URL = "";

export function FeedbackLink() {
  if (!FEEDBACK_FORM_URL) return null;

  return (
    <div className="rounded-lg border border-border bg-secondary/40 p-5">
      <p className="text-sm leading-relaxed text-foreground">
        このテーマを分解してほしい、読みづらい箇所があれば、フィードバックを送ってください。
      </p>
      <a
        href={FEEDBACK_FORM_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-2 inline-block text-sm font-medium text-accent hover:underline"
      >
        フィードバックを送る ↗
      </a>
    </div>
  );
}
