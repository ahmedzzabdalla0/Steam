import { twMerge } from "tailwind-merge";

export default function Tag({ className, children, ...props }) {
  return (
    <div
      className={twMerge(
        "shadow-md bg-primary text-neutral-200 w-fit rounded-md mb-8 relative overflow-hidden",
        className
      )}
      {...props}
    >
      <span className="block px-3 py-2 font-content-bold text-neutral-200">
        {children}
      </span>
    </div>
  );
}
