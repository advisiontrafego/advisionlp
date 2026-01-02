import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },

  experimental: {
    optimizePackageImports: [
      'motion',
      'lucide-react',
      '@radix-ui/react-slot',
    ],
    optimizeCss: true,
  },

  turbopack: {},
};

export default nextConfig;
