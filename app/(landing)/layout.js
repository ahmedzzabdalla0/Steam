import { almarai } from "@/assets/fonts/default";

export default function RootLayout({ children }) {
  return (
    <body className={`${almarai.variable} antialiased bg-neutral-1000`}>
      {children}
    </body>
  );
}
