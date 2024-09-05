import {setupDevPlatform} from '@cloudflare/next-on-pages/next-dev'

/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    "postcss-import": {},
    tailwindcss: {},
    // autoprefixer: {},
  },
};

if (process.env.NODE_ENV === 'development') await setupDevPlatform()

export default config;
