"use server";
import { z } from "zod";

import { createServerAction } from "zsa";
import { createClient } from "@/lib/utils/supabase/server";

export const subscribeAction = createServerAction()
  .input(z.object({ email: z.string() }))
  .handler(async ({ input }) => {
    const supabase = createClient();
    const { data, error } = await supabase
      .from("subscribers")
      .insert({ email: input.email });

    return { data, error };
  });
