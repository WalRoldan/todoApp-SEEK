import { resolve } from "path";

const nextConfig = {
  reactStrictMode: false,

  // Configuración experimental
  experimental: {
    esmExternals: true, // Habilita soporte para módulos ESM
  },

  // Configuración de Webpack para manejar alias
  webpack: (config) => {
    config.resolve.alias["msw/browser"] = resolve(
      "node_modules/msw/lib/browser/index.mjs"
    );
    return config;
  },
};

export default nextConfig;
