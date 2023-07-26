/** @type {import('next').NextConfig} */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { i18n } = require('./next-i18next.config');
module.exports = {
  async rewrites() {
    return [
      {
        source: '/.well-known/assetlinks.json',
        destination: '/assetlinks.json',
      },
    ];
  },
  i18n,
  eslint: {
    dirs: ['src'],
  },

  reactStrictMode: true,

  images: {
    domains: [
      'nftjapan-backup.s3.ap-northeast-1.amazonaws.com',
      'anygonow.s3.us-east-1.amazonaws.com',
      'anygonow.s3.dualstack.us-east-1.amazonaws.com',
      'zos.alipayobjects.com',
    ],
  },
};
