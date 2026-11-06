module.exports = {
  // Image optimization
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'baby-cucumber.com' },
      { protocol: 'https', hostname: 'discord.com' },
      { protocol: 'https', hostname: 'discordapp.com' },
      { protocol: 'https', hostname: 'cdn.discordapp.com' },
    ],
  },

  // Development origins
  allowedDevOrigins: ['testing.baby-cucumber.com'],
  devIndicators: {
    position: 'top-right',
  },

  // Cache configuration
  onDemandEntries: {
    maxInactiveAge: 60 * 1000,
    pagesBufferLength: 5,
  },

  // Headers for better cache control
  async headers() {
    // Development chunks can change without their URLs changing.
    if (process.env.NODE_ENV === 'development') {
      return [
        {
          source: '/:path*',
          headers: [
            {
              key: 'Cache-Control',
              value: 'private, no-store, max-age=0, must-revalidate',
            },
          ],
        },
      ];
    }

    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, must-revalidate',
          },
        ],
      },
      {
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },

  // Experimental features for better performance
  experimental: {
    optimizePackageImports: ['@heroui/react', '@iconify/react'],
  },
};