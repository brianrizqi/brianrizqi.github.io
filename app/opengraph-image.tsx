import { ImageResponse } from "next/og";
import { profile } from "@/data/portfolio";

export const alt = "Brian Rizqi P.D. — Software Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Rendered at build time into the 1200×630 card used by social platforms.
export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0a0a0a",
          color: "#f5f5f3",
          padding: "72px 80px",
          fontFamily: "sans-serif",
        }}
      >
        {/* Top rule */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 20,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#8a8a86",
            borderBottom: "1px solid #262624",
            paddingBottom: 24,
          }}
        >
          <span>Portfolio</span>
          <span>Jember · East Java, ID</span>
        </div>

        {/* Masthead */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 132,
              fontWeight: 700,
              lineHeight: 0.92,
              letterSpacing: -5,
            }}
          >
            SOFTWARE
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 132,
              fontWeight: 700,
              lineHeight: 0.92,
              letterSpacing: -5,
            }}
          >
            ENGINEER
            <span style={{ color: "#5b8dff" }}>.</span>
          </div>
        </div>

        {/* Bottom rule */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            borderTop: "1px solid #262624",
            paddingTop: 24,
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <span style={{ fontSize: 30, fontWeight: 600 }}>{profile.name}</span>
            <span style={{ fontSize: 22, color: "#8a8a86" }}>
              Lecturer · Project Manager · 9+ Years
            </span>
          </div>
          <span style={{ fontSize: 22, color: "#5b8dff" }}>brian.onestep.id</span>
        </div>
      </div>
    ),
    size
  );
}
