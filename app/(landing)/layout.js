import { almarai } from "@/assets/fonts/default";

export default function RootLayout({ children }) {
  return (
    <body className={`${almarai.variable} antialiased bg-primary-400`}>
      {children}
    </body>
  );
}
