/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: '/services/ayurveda-panchkarma',
        destination: '/services/panchkarma',
        permanent: true,
      },
      {
        source: '/yoga-teacher-training',
        destination: '/yoga-teacher-training/200-hour-ttc',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
