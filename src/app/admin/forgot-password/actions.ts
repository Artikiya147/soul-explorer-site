"use server";

import { createClient } from "@/lib/supabase/server";

export async function requestReset(_prevState: string | null, formData: FormData) {
  const supabase = await createClient();
  const email = formData.get("email") as string;
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3211";

  await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${siteUrl}/admin/auth/confirm?next=/admin/reset-password`,
  });

  // Always the same message, whether or not the email exists — avoids
  // revealing which emails have admin accounts.
  return "If that email has an account, a reset link is on its way.";
}
