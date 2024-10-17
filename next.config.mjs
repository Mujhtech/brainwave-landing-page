/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: '"storage.googleapis.com"',
        port: "",
      },
    ],
  },
};

// if (process.env.NEXT_PUBLIC_TEMPO) {
//   nextConfig["experimental"] = {
//     swcPlugins: [["tempo-devtools/swc", {}]],
//   };
// }

export default nextConfig;
