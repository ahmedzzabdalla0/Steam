export default ({
  children,
  colorClass = "var(--color-primary)",
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    version="1.1"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={512}
    height={512}
    x={0}
    y={0}
    viewBox="0 0 24 24"
    style={{ enableBackground: "new 0 0 512 512" }}
    xmlSpace="preserve"
    {...props}
  >
    <g>
      <g fill="#000">
        <path
          d="M14.78 20h-5c-1.8 0-5.2-.91-5.2-4.36s3.4-4.36 5.2-4.36h4.44c.15 0 3.7-.05 3.7-2.86s-3.55-2.86-3.7-2.86h-5a.75.75 0 0 1 0-1.5h5c1.8 0 5.2.91 5.2 4.36s-3.4 4.36-5.2 4.36H9.78c-.15 0-3.7.05-3.7 2.86s3.55 2.86 3.7 2.86h5a.75.75 0 1 1 0 1.5z"
          fill={colorClass}
          opacity={1}
          data-original="#000000"
          className=""
        />
        <path
          d="M6.44 8.31a3.53 3.53 0 1 1 .06-7.06 3.53 3.53 0 0 1-.06 7.06zm0-5.56a2 2 0 1 0 0 4 2 2 0 0 0 0-4zM17.56 22.75a3.53 3.53 0 1 1-.02-7.06 3.53 3.53 0 0 1 .02 7.06zm0-5.56a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"
          fill={colorClass}
          opacity={1}
          data-original="#000000"
          className=""
        />
      </g>
    </g>
  </svg>
);
