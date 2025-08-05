/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
    ],
    // Configuración específica para Vercel
    loader: 'default',
    domains: [],
    // Formatos soportados (comentado temporalmente para debugging)
    // formats: ['image/webp', 'image/avif'],
    // Tamaños de imagen para optimización
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Configuración para manejar mejor las imágenes estáticas
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  // Configuración específica para Vercel
  trailingSlash: false,
  // Revertir output standalone si causa problemas con imágenes
  // output: 'standalone',
}

export default nextConfig; 