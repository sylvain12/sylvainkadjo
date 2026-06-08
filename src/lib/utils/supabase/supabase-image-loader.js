const supabaseURL =
  process.env.NEXT_PUBLIC_SUPABASE_URL ||
  "https://urlalngimlynwkvmcoml.supabase.co";
const defaultBucket =
  process.env.NEXT_PUBLIC_SUPABASE_POST_IMAGES_BUCKET || "post_images";

const knownBuckets = [
  "post_images",
  "sylvainkadjo-assets",
];

// const isAbsoluteUrl = (src) => /^https?:\/\//.test(src);

const getStoragePath = (src) => {
  let normalizedSrc = src.replace(/^\/+/, "");

  // Remove Supabase base URL if full URL is passed
  if (normalizedSrc.startsWith(supabaseURL)) {
    normalizedSrc = normalizedSrc.replace(`${supabaseURL}/`, "");
  }

  // Handle normal public storage URL
  if (normalizedSrc.startsWith("storage/v1/object/public/")) {
    return normalizedSrc.replace("storage/v1/object/public/", "");
  }

  // Handle Supabase image transform URL
  if (normalizedSrc.startsWith("storage/v1/render/image/public/")) {
    return normalizedSrc.replace("storage/v1/render/image/public/", "");
  }

  // If src already starts with a known bucket, keep it as-is
  const startsWithKnownBucket = knownBuckets.some((bucket) =>
    normalizedSrc.startsWith(`${bucket}/`)
  );

  if (startsWithKnownBucket) {
    return normalizedSrc;
  }

  // if (normalizedSrc.startsWith(`${defaultBucket}/`)) {
  //   return normalizedSrc;
  // }

  // Otherwise fallback to default bucket
  return `${defaultBucket}/${normalizedSrc}`;
};

export default function supabaseLoader({
  src,
  width,
  quality,
}) {
  // if (isAbsoluteUrl(src)) {
  //   return src;
  // }

  const storagePath = getStoragePath(src);

  return `${supabaseURL}/storage/v1/render/image/public/${storagePath}?width=${width}&quality=${
    quality || 75
  }`;
}
