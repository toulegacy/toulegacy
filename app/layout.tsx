import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TouLegacy | Premium Marketplace",
  description:
    "TouLegacy is a premium, members-only marketplace with secure, invite-based access.",
  icons: {
    icon: "/favicon.ico", // put your icon file in /public/favicon.ico
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          padding: 0,
          backgroundColor: "#000",
          color: "#fff",
        }}
      >
        {children}
      </body>
    </html>
  );
}
