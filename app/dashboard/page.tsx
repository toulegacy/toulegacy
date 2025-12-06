"use client";

import React, { useEffect, useState } from "react";
import type { CSSProperties } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from "../firebase/config";

// ---------- SHARED STYLES (match landing page vibe) ----------

const pageStyle: CSSProperties = {
  minHeight: "100vh",
  width: "100%",
  backgroundImage: "url('/BG.jpg')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "40px 20px",
  boxSizing: "border-box",
};

const overlayStyle: CSSProperties = {
  maxWidth: "1100px",
  width: "100%",
  background:
    "linear-gradient(135deg, rgba(0,0,0,0.92), rgba(10,10,10,0.95))",
  borderRadius: "24px",
  border: "1px solid rgba(255, 215, 0, 0.35)",
  boxShadow:
    "0 20px 60px rgba(0,0,0,0.9), 0 0 35px rgba(255, 215, 0, 0.25)",
  padding: "32px 28px",
  boxSizing: "border-box",
  color: "#ffffff",
  display: "flex",
  flexDirection: "column",
  gap: "24px",
  position: "relative",
  overflow: "hidden",
};

const headerRowStyle: CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "16px",
  flexWrap: "wrap",
};

const titleBlockStyle: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "4px",
};

const titleStyle: CSSProperties = {
  fontSize: "28px",
  letterSpacing: "0.16em",
  textTransform: "uppercase",
  fontWeight: 700,
};

const subtitleStyle: CSSProperties = {
  fontSize: "14px",
  opacity: 0.9,
};

const faqStyle: CSSProperties = {
  fontSize: "13px",
  letterSpacing: "0.14em",
  textTransform: "uppercase",
  cursor: "pointer",
  padding: "8px 14px",
  borderRadius: "999px",
  border: "1px solid rgba(255, 215, 0, 0.4)",
  background: "rgba(0, 0, 0, 0.6)",
};

const explanationBoxStyle: CSSProperties = {
  background:
    "linear-gradient(135deg, rgba(0,0,0,0.7), rgba(10,10,10,0.9))",
  borderRadius: "18px",
  padding: "18px 18px 16px 18px",
  border: "1px solid rgba(255, 255, 255, 0.1)",
  boxShadow: "0 0 25px rgba(0,0,0,0.6)",
};

const explanationTitleStyle: CSSProperties = {
  fontSize: "16px",
  fontWeight: 700,
  textTransform: "uppercase",
  letterSpacing: "0.18em",
  marginBottom: "8px",
};

const explanationTextStyle: CSSProperties = {
  fontSize: "14px",
  lineHeight: 1.6,
  opacity: 0.94,
};

const sectionsRowStyle: CSSProperties = {
  display: "flex",
  flexWrap: "wrap",
  gap: "18px",
};

const cardColumnStyle: CSSProperties = {
  flex: "1 1 280px",
  minWidth: "260px",
};

const cardStyle: CSSProperties = {
  background: "rgba(8, 8, 8, 0.9)",
  borderRadius: "16px",
  border: "1px solid rgba(255, 255, 255, 0.1)",
  padding: "16px 16px 18px 16px",
  boxShadow: "0 12px 30px rgba(0,0,0,0.6)",
  display: "flex",
  flexDirection: "column",
  gap: "8px",
};

const cardHeaderStyle: CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "8px",
};

const cardTitleStyle: CSSProperties = {
  fontSize: "14px",
  fontWeight: 700,
  letterSpacing: "0.12em",
  textTransform: "uppercase",
};

const chipStyle: CSSProperties = {
  fontSize: "11px",
  padding: "3px 9px",
  borderRadius: "999px",
  border: "1px solid rgba(255, 215, 0, 0.65)",
  background:
    "linear-gradient(135deg, rgba(255,215,0,0.28), rgba(0,0,0,0.7))",
};

const bulletListStyle: CSSProperties = {
  listStyle: "disc",
  paddingLeft: "20px",
  margin: "4px 0 6px 0",
  fontSize: "12px",
  lineHeight: 1.6,
  opacity: 0.95,
};

const linkStyle: CSSProperties = {
  fontSize: "12px",
  textDecoration: "underline",
  color: "#f6c453",
};

const watchButtonStyle: CSSProperties = {
  marginTop: "6px",
  alignSelf: "flex-start",
  padding: "7px 14px",
  borderRadius: "999px",
  border: "1px solid rgba(255, 215, 0, 0.65)",
  fontSize: "11px",
  letterSpacing: "0.14em",
  textTransform: "uppercase",
  background:
    "linear-gradient(135deg, rgba(0,0,0,0.8), rgba(255,215,0,0.25))",
  cursor: "pointer",
};

const footerRowStyle: CSSProperties = {
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "10px",
  marginTop: "4px",
};

const tipTextStyle: CSSProperties = {
  fontSize: "11px",
  opacity: 0.8,
};

const primaryButtonStyle: CSSProperties = {
  padding: "10px 28px",
  borderRadius: "999px",
  border: "none",
  fontSize: "12px",
  letterSpacing: "0.16em",
  textTransform: "uppercase",
  fontWeight: 600,
  cursor: "pointer",
  color: "#000000",
  background:
    "linear-gradient(180deg, #ffd77a 0%, #f4b53f 45%, #f0a921 100%)",
  boxShadow:
    "0 10px 30px rgba(0,0,0,0.7), 0 0 20px rgba(255, 215, 0, 0.5)",
  transition: "transform 0.18s ease, box-shadow 0.18s ease",
};

// ---------- COMPONENT ----------

export default function DashboardPage() {
  const router = useRouter();
  const [checkingAuth, setCheckingAuth] = useState(true);

  // Simple auth guard – redirect to /auth/signin if no user
  useEffect(() => {
    const auth = getAuth(app);
    const unsub = onAuthStateChanged(auth, (user) => {
      if (!user) {
        router.push("/auth/signin");
      } else {
        setCheckingAuth(false);
      }
    });
    return () => unsub();
  }, [router]);

  // While checking auth, show a simple loading state with same background
  if (checkingAuth) {
    return (
      <div style={pageStyle}>
        <div style={overlayStyle}>
          <p style={{ fontSize: "13px", opacity: 0.9 }}>
            Checking your session…
          </p>
        </div>
      </div>
    );
  }

  return (
    <div style={pageStyle}>
      <main style={overlayStyle}>
        {/* TOP ROW: TITLE + FAQ */}
        <div style={headerRowStyle}>
          <div style={titleBlockStyle}>
            <div style={titleStyle}>Welcome</div>
            <div style={subtitleStyle}>TouLegacy Premium Marketplace</div>
          </div>
          <div style={faqStyle}>FAQ</div>
        </div>

        {/* MEANING OF TOULEGACY */}
        <section style={explanationBoxStyle}>
          <div style={explanationTitleStyle}>What is TouLegacy?</div>
          <p style={explanationTextStyle}>
            TouLegacy is a fusion of meanings. It comes from a mix of African
            roots, world languages, and my own creative twist. In West Africa,
            “tou” shows up in family names and represents heritage and
            strength. In Chinese, “tou” means head or leader — the beginning of
            something powerful. And in English, it plays off the phrase “to
            your legacy.” Altogether it means stepping into leadership,
            honoring where you come from, and building your own legacy.
          </p>
        </section>

        {/* PROXY SECTIONS */}
        <section style={sectionsRowStyle}>
          {/* iPhone CARD */}
          <div style={cardColumnStyle}>
            <div style={cardStyle}>
              <div style={cardHeaderStyle}>
                <div style={cardTitleStyle}>iPhone Setup</div>
                <span style={chipStyle}>Recommended</span>
              </div>
              <ul style={bulletListStyle}>
                <li>Device needed: iPhone</li>
                <li>
                  Buy proxies from{" "}
                  <a
                    href="https://bigmama.network"
                    target="_blank"
                    rel="noreferrer"
                    style={linkStyle}
                  >
                    BigMama
                  </a>
                  ,{" "}
                  <a
                    href="https://dataimpulse.com"
                    target="_blank"
                    rel="noreferrer"
                    style={linkStyle}
                  >
                    DataImpulse
                  </a>{" "}
                  or{" "}
                  <a
                    href="https://radianceproxies.com"
                    target="_blank"
                    rel="noreferrer"
                    style={linkStyle}
                  >
                    RadianceProxies
                  </a>{" "}
                  (BigMama is cheap and fire).
                </li>
                <li>
                  Download the app Potatso:{" "}
                  <a
                    href="https://apps.apple.com/us/app/potatso/id1239860606"
                    target="_blank"
                    rel="noreferrer"
                    style={linkStyle}
                  >
                    App Store link
                  </a>
                  .
                </li>
              </ul>
              <a
                href="https://imgur.com/a/WfZ0u4M"
                target="_blank"
                rel="noreferrer"
              >
                <button style={watchButtonStyle}>Watch setup video</button>
              </a>
            </div>
          </div>

          {/* ANDROID CARD */}
          <div style={cardColumnStyle}>
            <div style={cardStyle}>
              <div style={cardHeaderStyle}>
                <div style={cardTitleStyle}>Android Setup</div>
                <span style={chipStyle}>Mobile</span>
              </div>
              <ul style={bulletListStyle}>
                <li>Device needed: Android phone</li>
                <li>
                  Buy proxies from{" "}
                  <a
                    href="https://bigmama.network"
                    target="_blank"
                    rel="noreferrer"
                    style={linkStyle}
                  >
                    BigMama
                  </a>
                  ,{" "}
                  <a
                    href="https://dataimpulse.com"
                    target="_blank"
                    rel="noreferrer"
                    style={linkStyle}
                  >
                    DataImpulse
                  </a>{" "}
                  or{" "}
                  <a
                    href="https://radianceproxies.com"
                    target="_blank"
                    rel="noreferrer"
                    style={linkStyle}
                  >
                    RadianceProxies
                  </a>
                  .
                </li>
                <li>
                  Download the Super Proxy app from the Play Store (search
                  “Super Proxy”).
                </li>
              </ul>
              <a
                href="https://imgur.com/a/adKmwA9"
                target="_blank"
                rel="noreferrer"
              >
                <button style={watchButtonStyle}>Watch setup video</button>
              </a>
            </div>
          </div>

          {/* COMPUTER CARD */}
          <div style={cardColumnStyle}>
            <div style={cardStyle}>
              <div style={cardHeaderStyle}>
                <div style={cardTitleStyle}>Computer Setup</div>
                <span style={chipStyle}>Desktop</span>
              </div>
              <ul style={bulletListStyle}>
                <li>Device needed: any computer or laptop</li>
                <li>
                  Buy proxies from{" "}
                  <a
                    href="https://bigmama.network"
                    target="_blank"
                    rel="noreferrer"
                    style={linkStyle}
                  >
                    BigMama
                  </a>
                  ,{" "}
                  <a
                    href="https://dataimpulse.com"
                    target="_blank"
                    rel="noreferrer"
                    style={linkStyle}
                  >
                    DataImpulse
                  </a>{" "}
                  or{" "}
                  <a
                    href="https://radianceproxies.com"
                    target="_blank"
                    rel="noreferrer"
                    style={linkStyle}
                  >
                    RadianceProxies
                  </a>
                  .
                </li>
                <li>
                  Download AdsPower:{" "}
                  <a
                    href="https://activity.adspower.com/ap/dist/fast/?utm_source=google&utm_medium=cpc&utm_term=Search-Brand-EN-其他设备&utm_content=Brand&utm_campaign=ads%20power%20download&campaignid=19006273871&adgroupid=142464556686&adid=636658522018&network=g&device=m&locid=9004175&utm_matchtype=p&utm_targetid=kwd-1637000060094&gad_source=1&gbraid=0AAAAACQgKVOABp2vOItH2SngujfcsM19K&gclid=EAIaIQobChMIkOSn-7y1jAMVmGFHAR3PkTGKEAAYASAAEgIb2fD_BwE"
                    target="_blank"
                    rel="noreferrer"
                    style={linkStyle}
                  >
                    official download link
                  </a>
                  .
                </li>
              </ul>
              <a
                href="https://imgur.com/a/2ARDq4v"
                target="_blank"
                rel="noreferrer"
              >
                <button style={watchButtonStyle}>Watch setup video</button>
              </a>
            </div>
          </div>
        </section>

        {/* FOOTER ROW */}
        <footer style={footerRowStyle}>
          <p style={tipTextStyle}>
            Tip: Always test your proxy first. If a site feels slow or stuck,
            swap locations before you start.
          </p>

          {/* This will later link to the real marketplace route */}
          <button
            style={primaryButtonStyle}
            onClick={() => {
              // placeholder route for now – change later when marketplace is ready
              router.push("/");
            }}
            onMouseDown={(e) => {
              (e.currentTarget as HTMLButtonElement).style.transform =
                "translateY(1px)";
            }}
            onMouseUp={(e) => {
              (e.currentTarget as HTMLButtonElement).style.transform =
                "translateY(0)";
            }}
          >
            Enter Marketplace (soon)
          </button>
        </footer>
      </main>
    </div>
  );
}
