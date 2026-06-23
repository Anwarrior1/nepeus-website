import type { Metadata } from "next";
import type { ReactNode } from "react";
import NepeusCursor from "./components/NepeusCursor";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://nepeus.ai"),
  title: "Nepeus | AI Agents & Business Automations",
  description:
    "Nepeus builds AI agents and automation systems that reply, confirm, collect, update, notify, and report for smarter businesses.",
  openGraph: {
    title: "Nepeus | Stop Running Your Business Manually",
    description:
      "Custom AI agents and automations built around your business workflows.",
    images: ["/nepeus-logo.png"]
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <NepeusCursor />
      </body>
    </html>
  );
}
