import "./globals.css";
import { LandingMetadata } from "@/static/metadata";

export const metadata = LandingMetadata;

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      {children}
    </html>
  );
}
