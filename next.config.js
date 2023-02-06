const withTwin = require('./twin.config.js')

/** @type {import('next').NextConfig} */
const nextConfig = withTwin({
  reactStrictMode: true,
  images: {
    domains: ['res.cloudinary.com'],
  },
})

module.exports = nextConfig
