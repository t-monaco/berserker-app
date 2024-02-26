/** @type {import('next').NextConfig} */
const path = require('path');

const withSerwist = require('@serwist/next').default({
  // Note: This is only an example. If you use Pages Router,
  // use something else that works, such as "service-worker/index.ts".
  swSrc: '/src/app/sw.ts',
  swDest: 'public/sw.js',
  disable: process.env.NODE_ENV === 'development',
});

const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development',
});

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: { styledComponents: true },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
};

module.exports = withSerwist(nextConfig);
