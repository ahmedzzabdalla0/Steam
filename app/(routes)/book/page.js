import Sidebar from "@/components/book/sidebar";
import { Stages } from "@/static/stages";
import Link from "next/link";
import { Fragment } from "react";
export default function BookPage() {
  const lenMaxYears = Math.max(...Stages.map((stage) => stage.years.length));
  return (
    <div className="flex flex-col sm:flex-row absolute inset-0 gap-x-4">
      {/* Sidebar */}
      <Sidebar />
      <div
        className="bg-neutral-1000/[97%] [background-blend-mode:lighten] shadow-md m-4 mb-0 sm:mb-4 mr-0 rounded-m w-full p-7 overflow-y-scroll [-webkit-overflow-scrolling:touch] relative bg-fixed bg-center bg-cover"
        style={{ backgroundImage: `url(/bg-light.svg)` }}
      >
        <div className="shadow-md bg-primary text-neutral-200 w-fit rounded-md mb-4 relative overflow-hidden">
          <span className="block px-3 py-2 font-content-bold text-neutral-200">
            {"المراحل"}
          </span>
        </div>
        {Stages.map(({ label: stage, years }, i) => (
          <Fragment key={stage}>
            <h1 className="font-highlight-bold font-black text-primary mb-5">
              <span className="mx-2">{">"}</span>
              <span className="underline underline-offset-4">{stage}</span>
            </h1>
            <div className="grid [grid-template-columns:repeat(auto-fit,minmax(250px,1fr))] gap-x-7 h-fit relative">
              {years.map((year, j) => (
                <div
                  key={stage + year}
                  className="mb-7 bg-white/60 bg-clip-padding backdrop-filter backdrop-blur-[5px] border border-primary/20
 rounded-m p-5"
                >
                  <h6 className="font-heading-6 font-black text-primary-400 pointer-events-auto">
                    {year}
                  </h6>
                  <p className="font-content-bold text-primary mt-2">{stage}</p>
                  <div className="mt-4 grid grid-cols-1 w-full gap-3">
                    {Array.from({ length: 3 }, (_, j) => (
                      <Link
                        key={j + "l"}
                        className="flex items-center gap-x-2 font-caption-bold"
                        href="/book/unit"
                      >
                        <p className="bg-primary rounded-full font-caption-bold h-6.5 w-6.5 flex items-center justify-center aspect-square text-neutral-200">
                          {j + 1}
                        </p>
                        الوحدة الأولى
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
              {lenMaxYears > years.length &&
                Array.from({ length: lenMaxYears - years.length }, (_, k) => (
                  <div key={k + "empty"} className="invisible" />
                ))}
            </div>
            {i < Stages.length - 1 && (
              <div className="border-t border-primary/20 mb-5 mt-[calc(-7*4px+7*4px)]" />
            )}
          </Fragment>
        ))}
      </div>
    </div>
  );
}
