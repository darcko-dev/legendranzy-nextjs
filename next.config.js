/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/discord",
        destination: "https://discord.gg/7XejyXCAkj",
        permanent: true, // Puedes cambiar a `false` si quieres una redirección temporal
      },
      {
        source: "/billing",
        destination: "/billing",
        permanent: true, // Puedes cambiar a `false` si quieres una redirección temporal
      },
    ];
  },
};

module.exports = nextConfig;
