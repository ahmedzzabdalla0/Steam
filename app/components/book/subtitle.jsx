import { twMerge } from "tailwind-merge";

export default function Subtitle({ className, children, ...props }) {
  return (
    <h6
      className={twMerge(
        "font-highlight-bold font-black text-primary mb-5",
        className
      )}
      {...props}
    >
      <span className="mx-2">{">"}</span>
      <span className="underline underline-offset-4">{children}</span>
    </h6>
  );
}
