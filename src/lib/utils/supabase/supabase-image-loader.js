const supabaseURL = process.env.NEXT_PUBLIC_SUPABASE_URL;

export default function supabaseLoader({
  src,
  width,
  quality,
}) {
  return `${supabaseURL}/storage/v1/object/public/${src}?width=${width}&quality=${
    quality || 75
  }`;
}