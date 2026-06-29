const FONT_FAMILY = "Noto Sans JP";
// Google serves a small woff (not woff2) subset to UAs that predate woff2 support.
// next/og (satori) only accepts ttf/otf/woff, so this keeps the bundle tiny without
// needing to ship a full multi-MB CJK font file.
const LEGACY_USER_AGENT =
  "Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; rv:11.0) like Gecko";

export async function loadNotoSansJPSubset(
  text: string,
  weight: 400 | 700,
): Promise<ArrayBuffer> {
  const cssUrl = `https://fonts.googleapis.com/css2?family=${encodeURIComponent(
    FONT_FAMILY,
  )}:wght@${weight}&text=${encodeURIComponent(text)}`;
  const css = await fetch(cssUrl, {
    headers: { "User-Agent": LEGACY_USER_AGENT },
  }).then((res) => res.text());

  const fontUrl = css.match(/url\((https:\/\/[^)]+)\)/)?.[1];
  if (!fontUrl) {
    throw new Error(`Noto Sans JP font subset not found for: ${text}`);
  }
  const fontResponse = await fetch(fontUrl);
  return fontResponse.arrayBuffer();
}
