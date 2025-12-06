"use client";

import React, { type CSSProperties } from "react";
import Link from "next/link";

const pageStyle: CSSProperties = {
  minHeight: "100vh",
  width: "100%",
  backgroundImage: "url('/BG.jpg')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "40px 16px",
};

const cardShellStyle: CSSProperties = {
  width: "100%",
  maxWidth: "1100px",
  borderRadius: "18px",
  border: "1px solid rgba(255, 215, 128, 0.6)",
  background:
    "linear-gradient(135deg, rgba(0,0,0,0.8), rgba(12,12,12,0.9))",
  boxShadow: "0 0 55px rgba(0,0,0,0.85)",
  padding: "28px 32px 26px",
  color: "#ffffff",
  backdropFilter: "blur(10px)",
};

const sectionHeaderRow: CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "8px",
  fontSize: "11px",
  letterSpacing: "0.12em",
  textTransform: "uppercase",
  color: "rgba(255, 211, 130, 0.8)",
};

const titleStyle: CSSProperties = {
  fontSize: "28px",
  fontWeight: 800,
  letterSpacing: "0.05em",
  marginBottom: "6px",
};

const subtitleStyle: CSSProperties = {
  fontSize: "13px",
  lineHeight: 1.6,
  color: "rgba(255,255,255,0.9)",
  maxWidth: "780px",
};

const gridStyle: CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
  gap: "18px",
  marginTop: "26px",
};

const tileStyle: CSSProperties = {
  borderRadius: "14px",
  border: "1px solid rgba(255,255,255,0.14)",
  background:
    "radial-gradient(circle at top left, rgba(255,255,255,0.06), transparent 55%) rgba(5,5,5,0.9)",
  padding: "16px 18px 16px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  minHeight: "118px",
};

const tileLabelStyle: CSSProperties = {
  fontSize: "11px",
  letterSpacing: "0.16em",
  textTransform: "uppercase",
  color: "rgba(255, 211, 130, 0.9)",
  marginBottom: "4px",
};

const tileTitleStyle: CSSProperties = {
  fontSize: "15px",
  fontWeight: 700,
  marginBottom: "3px",
};

const tileBodyStyle: CSSProperties = {
  fontSize: "12px",
  lineHeight: 1.5,
  color: "rgba(255,255,255,0.9)",
  marginBottom: "4px",
};

const comingSoonText: CSSProperties = {
  fontSize: "11px",
  color: "rgba(255, 211, 130, 0.95)",
  fontWeight: 600,
};

const ctaRowStyle: CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginTop: "18px",
};

const leftNoteStyle: CSSProperties = {
  fontSize: "11px",
  color: "rgba(255,255,255,0.75)",
};

const buttonsRowStyle: CSSProperties = {
  display: "flex",
  gap: "10px",
};

const primaryButton: CSSProperties = {
  padding: "9px 20px",
  borderRadius: "999px",
  border: "none",
  fontSize: "12px",
  fontWeight: 600,
  letterSpacing: "0.09em",
  textTransform: "uppercase",
  cursor: "pointer",
  background:
    "linear-gradient(120deg, #ffd77a 0%, #f0b952 45%, #e8a63e 100%)",
  color: "#141414",
  boxShadow: "0 0 18px rgba(0,0,0,0.7)",
  transition: "transform 0.15s ease, box-shadow 0.15s ease, opacity 0.15s",
};

const secondaryButton: CSSProperties = {
  padding: "9px 20px",
  borderRadius: "999px",
  border: "1px solid rgba(255,255,255,0.4)",
  fontSize: "12px",
  fontWeight: 600,
  letterSpacing: "0.09em",
  textTransform: "uppercase",
  cursor: "pointer",
  background: "transparent",
  color: "rgba(255,255,255,0.9)",
  transition: "background 0.15s ease, color 0.15s ease, transform 0.15s ease",
};

const disabledButton: CSSProperties = {
  ...primaryButton,
  opacity: 0.45,
  cursor: "not-allowed",
  boxShadow: "none",
};

export default function MarketplacePage() {
  return (
    <main style={pageStyle}>
      <div style={cardShellStyle}>
        {/* Header row */}
        <div style={sectionHeaderRow}>
          <span>TOULEGACY / MARKETPLACE</span>
          <span>Verified sellers only</span>
        </div>

        {/* Title + intro */}
        <h1 style={titleStyle}>TOULEGACY MARKETPLACE</h1>
        <p style={subtitleStyle}>
          This is your curated space for verified drops, tools, and services.
          Toulegacy organizes these sections based on strategy, automation, and
          value. As we grow, more sellers and listings will appear here.
        </p>

        {/* Grid of sections */}
        <div style={gridStyle}>
          {/* Featured Drops */}
          <div style={tileStyle}>
            <div>
              <div style={tileLabelStyle}>Featured Drops</div>
              <div style={tileTitleStyle}>High-leverage bundles</div>
              <div style={tileBodyStyle}>
                Hand-selected releases from vetted Toulegacy sellers. Think
                launch bundles, limited runs, and high-impact offers you don’t
                want to miss.
              </div>
            </div>
            <div>
              <Link href="/marketplace/drops">
                <button
                  style={{
                    ...primaryButton,
                    paddingInline: "14px",
                    fontSize: "11px",
                  }}
                >
                  View drops
                </button>
              </Link>
            </div>
          </div>

          {/* Automation & Bots – LOCKED */}
          <div style={tileStyle}>
            <div>
              <div style={tileLabelStyle}>Automation &amp; Bots</div>
              <div style={tileTitleStyle}>Workflows that move for you</div>
              <div style={tileBodyStyle}>
                Scripts, automations, and bot workflows designed to handle the
                boring tasks, free your time, and scale what&apos;s already
                working.
              </div>
              <div style={comingSoonText}>Coming soon</div>
            </div>
            <div>
              <button
                style={{
                  ...disabledButton,
                  paddingInline: "14px",
                  fontSize: "11px",
                }}
                disabled
              >
                Locked
              </button>
            </div>
          </div>

          {/* Guides & Playbooks */}
          <div style={tileStyle}>
            <div>
              <div style={tileLabelStyle}>Guides &amp; Playbooks</div>
              <div style={tileTitleStyle}>Step-by-step strategy</div>
              <div style={tileBodyStyle}>
                PDFs, Notion systems, and video playbooks that walk you through
                tested methods so you don&apos;t waste time guessing.
              </div>
            </div>
            <div>
              <Link href="/marketplace/guides">
                <button
                  style={{
                    ...primaryButton,
                    paddingInline: "14px",
                    fontSize: "11px",
                  }}
                >
                  Browse guides
                </button>
              </Link>
            </div>
          </div>

          {/* Accounts & Services */}
          <div style={tileStyle}>
            <div>
              <div style={tileLabelStyle}>Accounts &amp; Services</div>
              <div style={tileTitleStyle}>Done-for-you options</div>
              <div style={tileBodyStyle}>
                Branded setups, account builds, and white-glove services from
                qualified providers to plug directly into your operation.
              </div>
            </div>
            <div>
              <Link href="/marketplace/services">
                <button
                  style={{
                    ...primaryButton,
                    paddingInline: "14px",
                    fontSize: "11px",
                  }}
                >
                  View services
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div style={ctaRowStyle}>
          <div style={leftNoteStyle}>
            Live listings will appear as soon as sellers are verified and
            approved by the Toulegacy admin team.
          </div>
          <div style={buttonsRowStyle}>
            <Link href="/dashboard">
              <button style={secondaryButton}>Back to Welcome</button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
