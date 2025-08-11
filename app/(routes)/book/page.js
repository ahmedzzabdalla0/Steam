import Sidebar from "@/components/book/sidebar";
import { StagesMetadata } from "@/static/metadata";
import { Stages } from "@/static/stages";
import Link from "next/link";
import { Fragment } from "react";

export function generateMetadata() {
  return StagesMetadata;
}

export default function BookPage() {
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
        {Stages.map(({ id: stage_id, label: stage, years }, i) => (
          <Fragment key={stage}>
            <h1 className="font-highlight-bold font-black text-primary mb-5">
              <span className="mx-2">{">"}</span>
              <span className="underline underline-offset-4">{stage}</span>
            </h1>
            <div className="grid [grid-template-columns:repeat(auto-fit,minmax(250px,300px))] gap-7 h-fit relative">
              {years.map(({ id: year_id, label: year, units }, j) => (
                <div
                  key={stage + year}
                  className="bg-white/60 bg-clip-padding backdrop-filter backdrop-blur-[5px] border border-primary/20
 rounded-m p-5"
                >
                  <h6 className="font-heading-6 font-black text-primary-400 pointer-events-auto">
                    {year}
                  </h6>
                  <p className="font-content-bold text-primary mt-2">{stage}</p>
                  <div className="mt-4 grid grid-cols-1 w-full gap-3">
                    {units.map(({ id: unit_id, label: unit }, unitIndex) => (
                      <Link
                        key={unit_id}
                        className="flex items-center gap-x-2 font-caption-bold"
                        href={`/book/${stage_id}/${year_id}/${unit_id}`}
                      >
                        <p className="bg-primary rounded-full font-caption-bold h-6.5 w-6.5 flex items-center justify-center aspect-square text-neutral-200">
                          {unitIndex + 1}
                        </p>
                        <span className="hover:text-primary transition-colors">
                          {unit}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            {i < Stages.length - 1 && (
              <div className="border-t border-primary/20 mb-5 mt-7" />
            )}
          </Fragment>
        ))}
      </div>
    </div>
  );
}
