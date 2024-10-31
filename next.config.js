

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

// next.config.js
module.exports = {
  /* Custom webpack configuration */
  webpack: (config, { dev, isServer }) => {
    // Modify webpack configuration here
    return config;
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
        port: '3000', // Assuming you're serving from port 3000 locally
      },
    ],
  },
  // Enabling future/experimental features for Next.js
  experimental: {
    appDir: true, // Enable app directory for Next.js 13+
  },
};
