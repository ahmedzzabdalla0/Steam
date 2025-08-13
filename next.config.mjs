/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,

  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  async redirects() {
    return process.env.SHOW_MAINTENANCE === "1"
      ? [
          {
            source: "/((?!coming-soon).*)",
            destination: "/coming-soon",
            permanent: false,
          },
        ]
      : [
          {
            source: "/coming-soon",
            destination: "/",
            permanent: false,
          },
        ];
  },
};

export default nextConfig;
