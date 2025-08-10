import Link from "next/link";
import { Fragment } from "react";

export default function Breadcrumbs({ crumbs }) {
  return (
    <div className="bg-neutral-300 p-4">
      <div className="flex space-x-2 font-caption-bold">
        {crumbs.map((crumb, index) => (
          <Fragment key={index}>
            {crumb.href ? (
              <Link
                href={crumb.href}
                className="text-primary-500 hover:underline"
              >
                {crumb.label}
              </Link>
            ) : (
              <span className="text-neutral-800">{crumb.label}</span>
            )}

            {index < crumbs.length - 1 && (
              <span className="text-neutral-600">/</span>
            )}
          </Fragment>
        ))}
      </div>
    </div>
  );
}
