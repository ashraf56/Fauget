/** @type {import('next').NextConfig} */
const nextConfig = {

    images: {
        remotePatterns: [
          {
            protocol: 'http',
            hostname: 'api.deezer.com',
         
          },
          {
            protocol: 'http',
            hostname: 'e-cdn-images.dzcdn.net',
         
          },
          {
            protocol: 'https',
            hostname: 'images.unsplash.com',
         
          },
          {
            protocol: "https",
            hostname: "lh3.googleusercontent.com",
          },
        ],
      },
};

export default nextConfig;
