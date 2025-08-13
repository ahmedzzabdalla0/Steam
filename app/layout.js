import "./globals.css";
import { LandingMetadata } from "@/static/metadata";
import { Analytics } from "@vercel/analytics/next";

export const metadata = LandingMetadata;

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
