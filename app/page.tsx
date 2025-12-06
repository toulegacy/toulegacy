"use client";

import Link from "next/link";

export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#000",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <h1 style={{ color: "white", fontSize: "34px", marginBottom: "10px" }}>
        Welcome to TouLegacy
      </h1>

      <p style={{ color: "#aaa", maxWidth: "500px", marginBottom: "30px" }}>
        Premium marketplace. Private access. Elite tools.
      </p>

      <div style={{ display: "flex", gap: "20px" }}>
        <Link href="/auth/signup">
          <button style={btnPrimary}>Sign Up</button>
        </Link>

        <Link href="/auth/signin">
          <button style={btnOutline}>Sign In</button>
        </Link>
      </div>
    </main>
  );
}

const btnPrimary = {
  padding: "12px 28px",
  background: "gold",
  border: "none",
  borderRadius: "6px",
  fontWeight: "bold",
  cursor: "pointer",
};

const btnOutline = {
  padding: "12px 28px",
  background: "transparent",
  border: "1px solid gold",
  color: "gold",
  borderRadius: "6px",
  fontWeight: "bold",
  cursor: "pointer",
};
