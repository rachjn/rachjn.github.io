// // /** @type {import('next').NextConfig} */
// // const nextConfig = {
// //   basePath: "/personal-site",
// //   output: "export",
// //   reactStrictMode: true,
// // };

// // export default nextConfig;

// // /** @type {import('next').NextConfig} */
// // const nextConfig = {
// //   basePath: "/2048-in-react",
// //   output: "export",
// //   reactStrictMode: true,
// // };

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   output: "export",
// };

// export default nextConfig;

// // module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: process.env.NODE_ENV === "production" ? "/racheljin" : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
