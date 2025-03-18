/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
      remotePatterns: [
        {
          protocol: 'https', // Cloudinary uses HTTPS
          hostname: 'res.cloudinary.com',
          pathname: '/dwkvlhuyv/image/upload/**', // Be specific to your cloud name and upload path
        },
      ],
    },
}

module.exports = nextConfig
