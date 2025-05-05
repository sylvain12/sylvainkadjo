import { createServerClient } from "@supabase/ssr";
import { Database } from "./types/database.types";
import { cookies } from "next/headers";
import { getRequestContext } from '@cloudflare/next-on-pages'

export const runtime = "edge";

export const createClient = () => {
  const cookiesStore = cookies();
  const { env } = getRequestContext();
  
  const supageURL = env.NEXT_PUBLIC_SUPABASE_URL;
  const supageKey = env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  return createServerClient<Database>(supageURL!, supageKey!, {
    cookies: {
      getAll() {
        return cookiesStore.getAll();
      },
      setAll(cookiesToSet) {
        try {
          cookiesToSet.forEach(({ name, value, options }) => {
            cookiesStore.set(name, value, options);
          });
        } catch {}
      },
    },
  });
};


export const getImage = async (path: string, bucket: string) => {
  const supabase  = createClient();
  const { data } = supabase.storage.from(bucket).getPublicUrl(path);
  return data.publicUrl;
}
