import Breadcrumbs from "@/components/book/breadcrumbs";
import Sidebar from "@/components/book/sidebar";
import { Units } from "@/static/units";
import Image from "next/image";
import spaceBgImage from "@/assets/images/bg-light.svg";

export default function BookPage() {
  return (
    <div className="flex flex-col sm:flex-row absolute inset-0 gap-x-4">
      {/* Sidebar */}
      <Sidebar />
      <div className="bg-neutral-1000 shadow-md m-4 mb-0 sm:mb-4 mr-0 rounded-m w-full p-7 overflow-y-scroll [-webkit-overflow-scrolling:touch] relative">
        <Image
          src={spaceBgImage}
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="opacity-[3%] absolute inset-0 z-0 pointer-events-none"
        />
        <div className="shadow-md bg-primary text-neutral-200 w-fit rounded-md mb-4 relative overflow-hidden">
          <span className="block px-3 py-2 font-content-bold text-neutral-200">
            {"الوحدات"}
          </span>
        </div>
        <div className="grid [grid-template-columns:repeat(auto-fit,minmax(250px,1fr))] gap-7 h-fit relative">
          {Units.map((unit, i) => (
            <div
              key={i}
              className="bg-white/60 bg-clip-padding backdrop-filter backdrop-blur-[5px] border border-primary/20
 rounded-m p-5"
            >
              <h6 className="font-heading-6 font-black text-primary-400 pointer-events-auto">
                {unit.label}
              </h6>
              <p className="font-content-bold text-primary mt-2">
                {unit.title}
              </p>
              <div className="mt-4 grid grid-cols-1 w-full gap-3">
                {Array.from({ length: 3 }, (_, j) => (
                  <div key={j + "l"} className="flex items-center gap-x-2">
                    <p className="bg-primary rounded-full font-caption-bold h-6.5 w-6.5 flex items-center justify-center aspect-square text-neutral-200">
                      {j + 1}
                    </p>
                    <a className="font-caption-bold">الدرس الاول</a>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
