import Sidebar from "@/components/book/sidebar";
import { feminineNumericWord, numericWord } from "@/static/numical";
import { Lessons } from "@/static/lessons";
import { Stages } from "@/static/stages";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const pathes = [];
  Stages.forEach((stage) => {
    stage.years.forEach((year) => {
      year.units.forEach((unit) => {
        pathes.push([stage.id, year.id, unit.id]);
      });
    });
  });

  return pathes;
}

export async function generateMetadata({ params }) {
  const { path } = await params;
  const [stage_id, year_id, unit_id] = path;
  const lessons = Lessons[stage_id]?.[year_id]?.[unit_id];
  if (!stage_id || !year_id || !unit_id || !lessons) {
    return notFound();
  }
  const stage = Stages.find((stage) => stage.id === stage_id);
  const year = stage?.years.find((year) => year.id === year_id);
  const unit = year?.units.find((unit) => unit.id === unit_id);
  const unit_index = year?.units.findIndex((unit) => unit.id === unit_id);
  const year_label = year?.label;
  const unit_label = unit?.label;

  return {
    title: `${unit_label} - ${year_label}`,
    description: `تعرّف على الوحدة ${feminineNumericWord[unit_index]}: ${unit_label} في ${year_label}`,
    authors: [
      {
        name: "الباحثة جيهان زايد",
        title: "قائدة فريق تطوير منهج العلوم في ضوء مدخل STEAM",
      },
    ],
  };
}

export default async function LessonsPage({ params }) {
  const { path } = await params;
  const [stage_id, year_id, unit_id] = path;
  const lessons = Lessons[stage_id]?.[year_id]?.[unit_id];
  if (!stage_id || !year_id || !unit_id || !lessons) {
    return notFound();
  }
  const stage = Stages.find((stage) => stage.id === stage_id);
  const year = stage?.years.find((year) => year.id === year_id);
  const unit = year?.units.find((unit) => unit.id === unit_id);
  const unit_index = year?.units.findIndex((unit) => unit.id === unit_id);
  const year_label = year?.label;
  const unit_label = unit?.label;

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
            {year_label}
          </span>
        </div>
        <h1 className="font-highlight-bold font-black text-primary mb-5">
          <span className="mx-2">{">"}</span>
          <span className="underline underline-offset-4">{`الوحدة ${feminineNumericWord[unit_index]}: ${unit_label}`}</span>
        </h1>
        <div className="grid [grid-template-columns:repeat(auto-fit,minmax(250px,1fr))] gap-7 h-fit relative">
          {lessons.map((lesson, i) => (
            <div
              key={i}
              className="bg-white/60 bg-clip-padding backdrop-filter backdrop-blur-[5px] border border-primary/20
 rounded-m p-5 clickable"
            >
              <h6 className="font-heading-6 font-black text-primary-400 pointer-events-auto">
                {`الدرس ${numericWord[i]}`}
              </h6>
              <p className="font-content-bold text-primary mt-2">
                {lesson.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
