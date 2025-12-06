"use client";

import React, { useState } from "react";
import Link from "next/link";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { app, db } from "../../firebase/config";

const pageStyle: React.CSSProperties = {
  minHeight: "100vh",
  width: "100%",
  backgroundImage: 'url("/BG.jpg")',
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "20px",
};

const overlayStyle: React.CSSProperties = {
  width: "100%",
  maxWidth: "520px",
  padding: "40px 36px 36px",
  borderRadius: "18px",
  border: "1px solid rgba(255, 215, 0, 0.4)",
  background:
    "radial-gradient(circle at top, rgba(255, 215, 0, 0.16), rgba(0,0,0,0.9))",
  boxShadow:
    "0 30px 80px rgba(0,0,0,0.95), 0 0 40px rgba(255, 215, 0, 0.35)",
  textAlign: "center",
  color: "#ffffff",
  animation: "fadeIn 0.8s ease-out", // 👈 fade-in added here
};

const logoStyle: React.CSSProperties = {
  marginBottom: "24px",
};

const titleStyle: React.CSSProperties = {
  fontSize: "14px",
  letterSpacing: "0.16em",
  textTransform: "uppercase",
  color: "#ffdd7a",
  marginBottom: "10px",
};

const headingStyle: React.CSSProperties = {
  fontSize: "20px",
  fontWeight: 600,
  letterSpacing: "0.08em",
  textTransform: "uppercase",
  marginBottom: "26px",
};

const formStyle: React.CSSProperties = {
  textAlign: "left",
};

const labelStyle: React.CSSProperties = {
  fontSize: "11px",
  letterSpacing: "0.18em",
  textTransform: "uppercase",
  color: "#d8d8d8",
  marginBottom: "6px",
};

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "10px 12px",
  marginBottom: "15px",
  borderRadius: "6px",
  border: "1px solid rgba(255, 255, 255, 0.3)",
  backgroundColor: "rgba(0, 0, 0, 0.4)",
  color: "#ffffff",
  fontSize: "14px",
  outline: "none",
};

const checkboxRowStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: "8px",
  marginTop: "6px",
  marginBottom: "22px",
  fontSize: "11px",
  color: "#d8d8d8",
};

const buttonRowStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "center",
};

const buttonStyle: React.CSSProperties = {
  width: "210px",
  padding: "11px 0",
  borderRadius: "999px",
  border: "1px solid #f5d37d",
  background:
    "linear-gradient(180deg, #ffd77a 0%, #f4b53f 50%, #f0a21e 100%)",
  color: "#1c1205",
  fontSize: "13px",
  letterSpacing: "0.16em",
  textTransform: "uppercase",
  fontWeight: 600,
  cursor: "pointer",
  boxShadow: "0 10px 28px rgba(0,0,0,0.8)",
};

const messageStyle: React.CSSProperties = {
  marginTop: "14px",
  fontSize: "13px",
};

const footerRowStyle: React.CSSProperties = {
  marginTop: "18px",
  fontSize: "12px",
  textAlign: "center",
  color: "#d0d0d0",
};

export default function SignupPage() {
  const auth = getAuth(app);

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [secretKey, setSecretKey] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [message, setMessage] = useState("");

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("");

    if (!agreed) {
      setMessage("You must agree to the rules of the site.");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userCredential.user;

      await setDoc(doc(db, "users", user.uid), {
        email,
        username,
        secretKey,
        createdAt: new Date().toISOString(),
      });

      setMessage("✅ Account created successfully!");
      setEmail("");
      setUsername("");
      setPassword("");
      setSecretKey("");
      setAgreed(false);
    } catch (error: any) {
      console.error(error);
      setMessage(error.message || "Something went wrong. Try again.");
    }
  };

  return (
    <main style={pageStyle}>
      <div style={overlayStyle}>
        {/* Logo */}
        <div style={logoStyle}>
          {/* If you have a logo image, replace this with <img src="/logo.png" ... /> */}
          <div
            style={{
              fontSize: "26px",
              fontWeight: 700,
              letterSpacing: "0.32em",
            }}
          >
            TOULEGACY
          </div>
        </div>

        {/* Title */}
        <div style={titleStyle}>Toulegacy</div>
        <h1 style={headingStyle}>Create account</h1>

        {/* Form */}
        <form style={formStyle} onSubmit={handleSignup}>
          <div>
            <div style={labelStyle}>Username</div>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={inputStyle}
              required
            />
          </div>

          <div>
            <div style={labelStyle}>Email address</div>
            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={inputStyle}
              required
            />
          </div>

          <div>
            <div style={labelStyle}>Password</div>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={inputStyle}
              required
            />
          </div>

          <div>
            <div style={labelStyle}>Secret key</div>
            <input
              type="password"
              placeholder="Secret key"
              value={secretKey}
              onChange={(e) => setSecretKey(e.target.value)}
              style={inputStyle}
              required
            />
          </div>

          <div style={checkboxRowStyle}>
            <input
              type="checkbox"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              style={{ width: "14px", height: "14px" }}
            />
            <span>I agree to the rules of the site</span>
          </div>

          <div style={buttonRowStyle}>
            <button type="submit" style={buttonStyle}>
              Sign up
            </button>
          </div>
        </form>

        {message && (
          <p style={messageStyle}>
            {message.startsWith("✅") ? (
              <span style={{ color: "#9AE684" }}>{message}</span>
            ) : (
              <span style={{ color: "#FEB2B2" }}>{message}</span>
            )}
          </p>
        )}

        <div style={footerRowStyle}>
          Already have an account?{" "}
          <Link href="/auth/signin" style={{ color: "#ffdd7a" }}>
            Sign in
          </Link>
        </div>
      </div>
    </main>
  );
}
