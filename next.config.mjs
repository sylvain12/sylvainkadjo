import { setupDevPlatform } from '@cloudflare/next-on-pages/next-dev';

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    loader: "custom",
    loaderFile: "./src/lib/utils/supabase/supabase-image-loader.js",
    remotePatterns: [
      {
        protocol: "https",
        hostname: "urlalngimlynwkvmcoml.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/**",
      }
    ],
  },
};

if (process.env.NODE_ENV === 'development') {
  await setupDevPlatform();
}

export default nextConfig;
