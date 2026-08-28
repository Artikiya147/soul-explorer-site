"use server";

import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

export async function updatePassword(_prevState: string | null, formData: FormData) {
  const password = formData.get("password") as string;
  const confirm = formData.get("confirm") as string;

  if (password.length < 8) return "Password needs to be at least 8 characters.";
  if (password !== confirm) return "Those passwords don't match.";

  const supabase = await createClient();
  const { error } = await supabase.auth.updateUser({ password });
  if (error) return error.message;

  redirect("/admin");
}
