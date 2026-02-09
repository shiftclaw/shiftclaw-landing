import { ImageResponse } from "next/og"

export const runtime = "edge"
export const alt = "ShiftClaw — Tools that ship fast"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 80, marginBottom: 16 }}>🦀</div>
        <div
          style={{
            fontSize: 56,
            fontWeight: 700,
            color: "white",
            marginBottom: 16,
          }}
        >
          ShiftClaw
        </div>
        <div
          style={{
            fontSize: 28,
            color: "#94a3b8",
          }}
        >
          Tools that ship fast
        </div>
      </div>
    ),
    { ...size }
  )
}
