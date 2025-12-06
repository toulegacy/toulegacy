"use client";

import Link from "next/link";
import Image from "next/image";

export default function LandingPage() {
  return (
    <div
      className="hero-shimmer"
      style={{
        position: "relative",
        height: "100vh",
        width: "100%",
        backgroundImage: "url('/BG.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column"
      }}
    >
      {/* LOGO */}
      <Image
        src="/logo.png"
        alt="Toulegacy Logo"
        width={180}
        height={180}
        style={{ marginBottom: "10px" }}
      />

      {/* BRAND NAME */}
      <h1
        style={{
          fontSize: "42px",
          fontWeight: "800",
          letterSpacing: "2px",
          color: "#ffffff",
          textAlign: "center",
          marginTop: "-10px",
          marginBottom: "10px",
          textShadow: "0 0 35px rgba(0,0,0,0.9)",
        }}
      >
        TOULEGACY
      </h1>

      {/* TAGLINE */}
      <h2
        style={{
          fontSize: "34px",
          fontWeight: "800",
          textAlign: "center",
          color: "white",
          maxWidth: "90%",
          textShadow: "0 0 35px black",
          marginBottom: "40px",
        }}
      >
        WELCOME TO THE <br /> PREMIUM MARKETPLACE
      </h2>

      {/* BUTTONS */}
      <div style={{ display: "flex", gap: "20px" }}>
        <Link href="/auth/signup">
          <button
            style={{
              padding: "10px 28px",
              borderRadius: "8px",
              border: "2px solid #cfa34a",
              backgroundColor: "transparent",
              color: "#cfa34a",
              fontWeight: "bold",
              fontSize: "16px",
              cursor: "pointer",
              transition: "0.25s",
            }}
          >
            Sign up
          </button>
        </Link>

        <Link href="/auth/signin">
          <button
            style={{
              padding: "10px 28px",
              borderRadius: "8px",
              border: "2px solid #cfa34a",
              backgroundColor: "transparent",
              color: "#cfa34a",
              fontWeight: "bold",
              fontSize: "16px",
              cursor: "pointer",
              transition: "0.25s",
            }}
          >
            Sign in
          </button>
        </Link>
      </div>
    </div>
  );
}
