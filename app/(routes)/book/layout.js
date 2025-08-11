import { almarai } from "@/assets/fonts/default";
import Sidebar from "@/components/book/sidebar";
import Breadcrumbs from "@/components/book/breadcrumbs";

export default function RootLayout({ children }) {
  return (
    <body className={`${almarai.variable} antialiased bg-white`}>
      <div className="flex flex-col sm:flex-row absolute inset-0 gap-x-4">
        <Sidebar />
        <div className="flex flex-col gap-y-4 w-full p-4 pb-0 sm:pb-4 sm:pr-0">
          <div
            className="bg-neutral-1000 border border-primary-400/5 rounded-md py-4 px-7 overflow-y-scroll [-webkit-overflow-scrolling:touch] relative bg-fixed [background-position:right_0] bg-cover"
            style={{ backgroundImage: `url(/bg-light.png)` }}
          >
            <Breadcrumbs />
          </div>
          <div
            className="bg-neutral-1000 h-full border border-primary-400/5 rounded-md p-7 overflow-y-scroll [-webkit-overflow-scrolling:touch] relative bg-fixed [background-position:right_-16px] bg-cover"
            style={{ backgroundImage: `url(/bg-light.png)` }}
          >
            {children}
          </div>
        </div>
      </div>
    </body>
  );
}
