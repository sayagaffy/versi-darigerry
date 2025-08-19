/** @type {import('next').NextConfig} */
const nextConfig = {
  // Performance optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },

  // Image optimization
  images: {
    formats: ["image/webp", "image/avif"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    domains: ["bicarapintar.ai", "cdn.bicarapintar.ai"],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  // Headers for security and performance
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
      {
        source: "/fonts/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/_next/static/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },

  // Redirects for SEO
  async redirects() {
    return [
      {
        source: "/home",
        destination: "/",
        permanent: true,
      },
      {
        source: "/platform",
        destination: "https://platform.bicarapintar.ai",
        permanent: false,
      },
    ];
  },

  // Rewrites for API routing
  async rewrites() {
    return [
      {
        source: "/api/analytics/:path*",
        destination: "https://analytics.bicarapintar.ai/:path*",
      },
    ];
  },

  // Environment variables
  env: {
    SITE_URL: process.env.SITE_URL || "https://bicarapintar.ai",
    GA_MEASUREMENT_ID: process.env.GA_MEASUREMENT_ID,
  },

  // Output configuration for deployment
  output: "standalone",

  // Webpack customizations
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Optimize bundle analyzer
    if (process.env.ANALYZE === "true") {
      const withBundleAnalyzer = require("@next/bundle-analyzer")({
        enabled: true,
      });
      return withBundleAnalyzer(config);
    }

    // Custom webpack rules
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },

  // TypeScript configuration
  typescript: {
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors (not recommended for production)
    ignoreBuildErrors: false,
  },

  // ESLint configuration
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors (not recommended for production)
    ignoreDuringBuilds: false,
  },

  // PWA Configuration (optional)
  // Add if you want to make it a Progressive Web App

  // Internationalization (if needed)
  // i18n: {
  //   locales: ['en', 'id'],
  //   defaultLocale: 'en',
  // },

  // Development configuration
  ...(process.env.NODE_ENV === "development" && {
    // Enable source maps in development
    productionBrowserSourceMaps: false,
  }),
};

module.exports = nextConfig;
