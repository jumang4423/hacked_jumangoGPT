const { i18n } = require('./next-i18next.config');

/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n,
  reactStrictMode: true,

  webpack(config, { isServer, dev }) {
    config.experiments = {
      asyncWebAssembly: true,
      layers: true,
    };
    config.module.rules.push({
      test: /\.mp3$/,
      use: {
        loader: 'file-loader',
      },
    });

    return config;
  },
};

module.exports = nextConfig;
