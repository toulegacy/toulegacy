"use client";

import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { app, db } from "../../firebase/config";

export default function SigninPage() {
  const auth = getAuth(app);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [secretKey, setSecretKey] = useState("");
  const [message, setMessage] = useState("");

  const handleSignin = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("");

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      const userDoc = await getDoc(doc(db, "users", user.uid));

      if (!userDoc.exists()) {
        setMessage("❌ No user data found.");
        return;
      }

      const data = userDoc.data() as { secretKey?: string };

      if (!data.secretKey) {
        setMessage("❌ No secret key stored for this account.");
        return;
      }

      if (data.secretKey !== secretKey) {
        setMessage("❌ Secret key is incorrect.");
        return;
      }

      setMessage("✅ Logged in successfully!");
    } catch (error: any) {
      setMessage(`❌ ${error.message}`);
    }
  };

  return (
    <div style={backgroundStyle}>
      <div style={overlayStyle}>
        <main style={mainStyle}>
          <div style={cardStyle}>
            <div style={logoWrapperStyle}>
              <img src="/logo.png" alt="Toulegacy logo" style={logoStyle} />
              <div style={brandNameStyle}>TOULEGACY</div>
            </div>

            <h1 style={titleStyle}>Access your account</h1>

            <form onSubmit={handleSignin} style={{ marginTop: "20px" }}>
              <input
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={inputStyle}
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                style={inputStyle}
              />
              <input
                type="password"
                placeholder="Secret key"
                value={secretKey}
                onChange={(e) => setSecretKey(e.target.value)}
                required
                style={inputStyle}
              />

              <button
                type="submit"
                style={buttonStyle}
                onMouseEnter={(e) => {
                  (e.currentTarget.style.boxShadow =
                    "0 20px 60px rgba(0,0,0,0.9), 0 0 35px rgba(240, 185, 60, 0.9)");
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget.style.boxShadow =
                    "0 15px 45px rgba(0,0,0,0.85), 0 0 30px rgba(240,185,60,0.75)");
                }}
              >
                SIGN IN
              </button>
            </form>

            {message && (
              <p
                style={{
                  marginTop: "18px",
                  fontSize: "13px",
                  color: message.startsWith("✅") ? "#9AE6B4" : "#FEB2B2",
                  textAlign: "center",
                }}
              >
                {message}
              </p>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}

const backgroundStyle: React.CSSProperties = {
  minHeight: "100vh",
  width: "100%",
  backgroundImage: "url('/BG.jpg')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};

const overlayStyle: React.CSSProperties = {
  width: "100%",
  height: "100%",
  background:
    "radial-gradient(circle at center, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.96) 70%)",
};

const mainStyle: React.CSSProperties = {
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "20px",
};

const cardStyle: React.CSSProperties = {
  width: "100%",
  maxWidth: "460px",
  padding: "40px 36px 36px",
  borderRadius: "18px",
  border: "1px solid rgba(255, 215, 0, 0.4)",
  background:
    "radial-gradient(circle at top, rgba(255, 215, 0, 0.18), rgba(0,0,0,0.85))",
  boxShadow:
    "0 30px 80px rgba(0,0,0,0.9), 0 0 40px rgba(255, 215, 0, 0.35)",
  textAlign: "center",
  color: "#ffffff",
};

const logoWrapperStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginBottom: "24px",
};

const logoStyle: React.CSSProperties = {
  width: "70px",
  height: "70px",
  objectFit: "contain",
};

const brandNameStyle: React.CSSProperties = {
  marginTop: "6px",
  fontSize: "16px",
  letterSpacing: "0.24em",
  fontWeight: 600,
  color: "#f9d47e",
};

const titleStyle: React.CSSProperties = {
  margin: 0,
  fontSize: "18px",
  fontWeight: 600,
  letterSpacing: "0.12em",
  textTransform: "uppercase",
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

const buttonStyle: React.CSSProperties = {
  width: "100%",
  padding: "12px 16px",
  borderRadius: "30px",
  border: "none",
  cursor: "pointer",
  fontWeight: 600,
  letterSpacing: "0.12em",
  fontSize: "14px",
  marginTop: "8px",
  color: "#000",
  background:
    "linear-gradient(180deg, #ffd77a 0%, #f4b53f 50%, #f0a92e 100%)",
  boxShadow:
    "0 15px 45px rgba(0,0,0,0.85), 0 0 30px rgba(240,185,60,0.75)",
};
