import { createServerClient } from "@supabase/ssr";
import { Database } from "./types/database.types";
import { cookies } from "next/headers";

const supageURL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supageKey = process.env.NEXT_PUBLIC_SUPABASE_KEY;

export const createClient = () => {
  const cookiesStore = cookies();
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
