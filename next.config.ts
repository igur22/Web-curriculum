import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: false, // Cambiar a false para producción
  },
  // Habilitar React Strict Mode para mejor compatibilidad
  reactStrictMode: true,
  // Configuración de imágenes para mejor compatibilidad
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  // Configuración experimental para mejor compatibilidad
  experimental: {
    // optimizeCss: true, // Deshabilitado por problemas de compatibilidad
  },
  eslint: {
    // Habilitar ESLint en producción
    ignoreDuringBuilds: false,
  },
};

export default nextConfig;
