

// // next.config.js
// module.exports = {
//   /* Custom webpack configuration */
//   webpack: (config, { dev, isServer }) => {
//     // Modify webpack configuration here
//     return config;
//   },
//   images: {
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: 'res.cloudinary.com',
//       },
//       {
//         protocol: 'https',
//         hostname: 'yt3.googleusercontent.com',
//       },
//       {
//         protocol: 'https',
//         hostname: '123moviesonline.vercel.app',
//       },
//       {
//         protocol: 'http',
//         hostname: 'localhost',
//         port: '3000', // Assuming you're serving from port 3000 locally
//       },
//     ],
//   },
// };

// const withBundleAnalyzer = require('@next/bundle-analyzer')({
//   enabled: process.env.ANALYZE === 'true',
// });

// module.exports = withBundleAnalyzer({
//   /* Custom webpack configuration */
//   webpack: (config, { dev, isServer }) => {
//     // Modify webpack configuration here
//     return config;
//   },
//   images: {
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: 'res.cloudinary.com',
//       },
//       {
//         protocol: 'https',
//         hostname: 'yt3.googleusercontent.com',
//       },
//       {
//         protocol: 'https',
//         hostname: '123moviesonline.vercel.app',
//       },
//       {
//         protocol: 'http',
//         hostname: 'localhost',
//         port: '3000', // Assuming you're serving from port 3000 locally
//       },
//     ],
//   },
// });

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
  webpack: (config, { dev, isServer }) => {
    return config; // Custom webpack modifications can be added here
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
      {
        protocol: 'https',
        hostname: 'yt3.googleusercontent.com',
      },
      {
        protocol: 'https',
        hostname: '123moviesonline.vercel.app',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3000',
      },
    ],
  },
});
