/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.genatec.com",
        port: "",
        pathname: "/hs-fs/hubfs/genatec_blog_assets/**",
      },
    ],
  },
};

module.exports = nextConfig;
