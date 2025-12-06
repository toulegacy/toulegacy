'use client';

import Link from "next/link";

export default function TargetMethodGuide() {
  return (
    <div style={pageStyle}>
      <div style={cardStyle}>

        <h1 style={titleStyle}>Target Method Guide</h1>
        <p style={subtitleStyle}>
          Verified strategy walkthrough for users operating with their own legally issued cards.
        </p>

        <div style={sectionStyle}>
          <h2 style={stepTitle}>Step 1 – BIN Selection</h2>
          <p style={textStyle}>
            Load up and grab one of these bins. It does not necessarily matter which one — all of them have hits.
          </p>
          <ul style={listStyle}>
            <li>MAIN BIN: 376735 (Standard Amex BIN – proven results)</li>
            <li>Fire BIN: 379735 (Higher hit rate with clean device & proxy rotation)</li>
          </ul>
          <p style={textStyle}>
            If you experience instant cancellations (under 1 hour), switch your device or use a fresh proxy.
            If cancellation occurs after 1 hour, the order was manually reviewed and insufficient volume was placed.
          </p>
        </div>

        <div style={sectionStyle}>
          <h2 style={stepTitle}>Step 2 – Account & Cookie Setup</h2>
          <ol style={listStyle}>
            <li>Toggle airplane mode ON and OFF for 10 seconds.</li>
            <li>Go to Settings → Clear Safari history and close all tabs.</li>
            <li>Open Safari → Visit target.com → Create a new account using cardholder details ONLY.</li>
            <li>After account creation, toggle airplane mode again for 10 seconds.</li>
            <li>Log out of the account.</li>
            <li>Repeat airplane mode toggle again.</li>
            <li>Log back into the account.</li>
            <li>Search for a product and scroll normally to build cookies.</li>
            <li>Add item to cart and sit in cart for 30 seconds while scrolling.</li>
            <li>Log out and repeat airplane toggle one final time.</li>
          </ol>
        </div>

        <div style={sectionStyle}>
          <h2 style={stepTitle}>Step 3 – Checkout & Post-Order Behavior</h2>
          <ol style={listStyle}>
            <li>Log back into the account.</li>
            <li>Proceed to checkout using PICKUP only (Do NOT switch to delivery).</li>
            <li>Enter FULL card information.</li>
            <li>Place the order and DO NOT touch the page for 5 minutes.</li>
            <li>After 5 minutes, check status:</li>
          </ol>
          <ul style={listStyle}>
            <li>If you receive “Request payment change” → order is green.</li>
            <li>If not, wait up to 2 hours for store processing.</li>
          </ul>
        </div>

        <div style={divider}></div>

        <p style={disclaimerStyle}>
          This guide assumes the user is operating with their own legitimately issued payment method.
          Toulegacy does not support misuse of financial instruments. Users are responsible for compliance.
        </p>

        <Link href="/marketplace">
          <button style={backButton}>Back to Marketplace</button>
        </Link>

      </div>
    </div>
  );
}

const pageStyle = {
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "40px",
  backgroundImage: "url('/BG.jpg')",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const cardStyle = {
  maxWidth: "900px",
  width: "100%",
  background: "rgba(10,10,20,0.92)",
  border: "2px solid gold",
  borderRadius: "16px",
  padding: "40px",
  color: "#fff",
};

const titleStyle = {
  fontSize: "36px",
  marginBottom: "10px",
};

const subtitleStyle = {
  opacity: 0.8,
  marginBottom: "30px",
};

const sectionStyle = {
  marginBottom: "30px",
};

const stepTitle = {
  fontSize: "22px",
  marginBottom: "10px",
  color: "gold",
};

const textStyle = {
  fontSize: "16px",
  lineHeight: "1.6",
};

const listStyle = {
  fontSize: "16px",
  lineHeight: "1.6",
  paddingLeft: "20px",
};

const divider = {
  height: "1px",
  background: "gold",
  margin: "30px 0",
  opacity: 0.5,
};

const disclaimerStyle = {
  fontSize: "13px",
  opacity: 0.7,
  marginBottom: "20px",
};

const backButton = {
  padding: "12px 24px",
  background: "gold",
  color: "#000",
  borderRadius: "8px",
  fontWeight: "bold",
  cursor: "pointer",
};
