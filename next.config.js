/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    outputStandalone: true,
  },
  serverRuntimeConfig: {
    // Will only be available on the server side
    DOMAIN_NAME: process.env.DOMAIN_NAME,
    LOCAL_API_BASE_URL: process.env.LOCAL_API_BASE_URL,
  },
  publicRuntimeConfig: {
    // Will be available on both server and client
    DOMAIN_NAME: process.env.DOMAIN_NAME,
    PUBLIC_API_BASE_URL: process.env.PUBLIC_API_BASE_URL,
  },
}

module.exports = nextConfig
