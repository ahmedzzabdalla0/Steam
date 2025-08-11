import Subtitle from "@/components/book/subtitle";
import Tag from "@/components/book/tag";
import { StagesMetadata } from "@/static/metadata";
import { Stages } from "@/static/stages";
import Link from "next/link";
import { Fragment } from "react";

export function generateMetadata() {
  return StagesMetadata;
}

export default function BookPage() {
  return (
    <>
      <Tag>{"الوحدات"}</Tag>
      {Stages.map(({ id: stage_id, label: stage, years }, i) => (
        <Fragment key={stage}>
          <Subtitle>{stage}</Subtitle>
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
    </>
  );
}
