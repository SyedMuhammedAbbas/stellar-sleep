/** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// };

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "g-storage.slumber.one",
        port: "",
        pathname: "/starting-quiz.gif",
      },
    ],
  },
  experimental: {
    appDir: true,
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        fs: false,
        module: false,
      };
    }

    return config;
  },
};
