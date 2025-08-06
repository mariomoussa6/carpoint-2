/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Desactivar optimización de imágenes para solucionar problemas en Vercel
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
    ],
    // Configuración específica para Vercel
    loader: 'default',
    domains: [],
    // Tamaños de imagen para optimización (mantenidos por compatibilidad)
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Configuración para manejar mejor las imágenes estáticas
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  // Configuración específica para Vercel
  trailingSlash: false,
}

export default nextConfig; 