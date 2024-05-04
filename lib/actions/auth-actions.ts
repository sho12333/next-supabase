"use server";

import { z } from "zod";
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import { FormSchema } from "@/lib/types/auth";

export const login = async ({
  email,
  password,
}: z.infer<typeof FormSchema>) => {
  const supabase = createClient();
  const response = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  return response;
};

export const signUp = async ({
  email,
  password,
}: z.infer<typeof FormSchema>) => {
  const supabase = createClient();
  const response = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/auth/callback`,
    },
  });
  return response;
};
