/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = nextConfig;
experimental: {
  serverComponentsExternalPackages: [
    "@react-email/render",
    "@react-email/tailwind",
  ];
}
