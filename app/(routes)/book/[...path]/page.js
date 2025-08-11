import { feminineNumericWord, numericWord } from "@/static/numical";
import { Lessons } from "@/static/lessons";
import { Stages } from "@/static/stages";
import { notFound } from "next/navigation";
import { Fragment } from "react";
import Tag from "@/components/book/tag";
import Subtitle from "@/components/book/subtitle";

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
    description: `تعرّف على دروس الوحدة ${feminineNumericWord[unit_index]}: ${unit_label} في ${year_label}`,
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
  const semesters = Lessons[stage_id]?.[year_id]?.[unit_id];
  if (!stage_id || !year_id || !unit_id || !semesters) {
    return notFound();
  }
  const stage = Stages.find((stage) => stage.id === stage_id);
  const year = stage?.years.find((year) => year.id === year_id);
  const unit = year?.units.find((unit) => unit.id === unit_id);
  const unit_index = year?.units.findIndex((unit) => unit.id === unit_id);
  const year_label = year?.label;

  return (
    <>
      <Tag>{`الوحدة ${feminineNumericWord[unit_index + 1]} - ${
        unit.label
      }`}</Tag>

      {semesters.map(
        ({ id: semester_id, label: semester_label, lessons }, i) => (
          <Fragment key={semester_id + "-fragment"}>
            <Subtitle>{semester_label}</Subtitle>
            <div className="grid [grid-template-columns:repeat(auto-fit,minmax(250px,300px))] gap-7 h-fit relative not-last:mb-6">
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
          </Fragment>
        )
      )}
    </>
  );
}
