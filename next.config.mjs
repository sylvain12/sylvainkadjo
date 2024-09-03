/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    loader: "custom",
    loaderFile: "./src/lib/utils/supabase/supabase-image-loader.js",
    remotePatterns: [
      {
        protocol: "https",
        hostname: "loremflickr.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "mxbosdcygymutbntssim.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/post_images",
      },
    ],
  },
};

export default nextConfig;
