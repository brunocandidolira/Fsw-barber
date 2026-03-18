/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "utfs.io",
      },
      {
        hostname: "i.ibb.co", // Adicionando o domínio das fotos da barbearia
      },
    ],
  },
};

export default nextConfig;