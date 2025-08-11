"use client";

import { usePathname } from "next/navigation";
import PathIcon from "@/assets/icons/path";
import Link from "next/link";
import { Fragment } from "react";
import { Stages } from "@/static/stages";

const readyCrumbs = {
  "/book": "المناهج",
  "/book/[stage_id]": "المراحل",
  "/book/[stage_id]/[year_id]": "السنوات",
  "/book/[stage_id]/[year_id]/[unit_id]": "الوحدات",
};

// lessons
// book/intermediate/first_year/life_sciences

export default function Breadcrumbs() {
  const pathname = usePathname().split("/").slice(1);
  const crumbs = [
    { label: "المناهج", ...(pathname.length > 1 && { href: "/book" }) },
  ];
  const lessonPath = pathname.slice(1, 4);
  console.log(pathname);
  console.log(lessonPath);

  const [stage_id, year_id, unit_id] = lessonPath;
  const stage = Stages.find((s) => s.id === stage_id);
  const year = stage?.years.find((y) => y.id === year_id);
  const unit = year?.units.find((u) => u.id === unit_id);
  if (unit)
    crumbs.push({
      label: `${year.label} - ${unit.label}`,
      ...(lessonPath.length > 3 && {
        href: `/book/${stage_id}/${year_id}/${unit.id}`,
      }),
    });

  return (
    <div className="flex items-center space-x-2 font-caption-bold">
      <span className="block pl-2">
        <PathIcon className="icon-6 rotate-90" />
      </span>
      {crumbs.map((crumb, index) => (
        <Fragment key={index}>
          {crumb.href ? (
            <Link href={crumb.href} className="text-primary-400 underline">
              {crumb.label}
            </Link>
          ) : (
            <span className="text-primary-400/80">{crumb.label}</span>
          )}

          {index < crumbs.length - 1 && (
            <span className="text-neutral-600">/</span>
          )}
        </Fragment>
      ))}
    </div>
  );
}
