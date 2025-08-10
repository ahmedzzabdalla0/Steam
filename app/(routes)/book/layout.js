import { almarai } from "@/assets/fonts/default";

export default function RootLayout({ children }) {
  return (
    <body className={`${almarai.variable} antialiased bg-white`}>
      {children}
    </body>
  );
}
