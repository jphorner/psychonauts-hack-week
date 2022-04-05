import('next').NextConfig
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  nextConfig,
  images: {
    domains: ["psychonauts-api.herokuapp.com"]
  },
}
