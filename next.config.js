/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    experimental: {
      appDir: true
    },
    output: 'standalone', // ça aide Vercel à builder correctement
  };
  
  module.exports = nextConfig;
  