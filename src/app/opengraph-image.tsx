import { ImageResponse } from "next/og";
import { loadNotoSansJPSubset } from "@/lib/og-font";
import { SITE_NAME, SITE_TAGLINE } from "@/lib/site";

export const alt = SITE_NAME;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const [bold, regular] = await Promise.all([
    loadNotoSansJPSubset(SITE_NAME, 700),
    loadNotoSansJPSubset(SITE_TAGLINE, 400),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#f7f8fa",
        }}
      >
        <div
          style={{ width: 96, height: 8, background: "#2f5d46", marginBottom: 32 }}
        />
        <div
          style={{
            fontFamily: "Noto Sans JP",
            fontWeight: 700,
            fontSize: 96,
            color: "#232838",
          }}
        >
          {SITE_NAME}
        </div>
        <div
          style={{
            fontFamily: "Noto Sans JP",
            fontWeight: 400,
            fontSize: 32,
            color: "#5b6373",
            marginTop: 24,
            maxWidth: 920,
          }}
        >
          {SITE_TAGLINE}
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
