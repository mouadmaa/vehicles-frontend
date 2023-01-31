const withTwin = require('./twin.config.js')

/** @type {import('next').NextConfig} */
const nextConfig = withTwin({
  reactStrictMode: true,
})

module.exports = nextConfig
