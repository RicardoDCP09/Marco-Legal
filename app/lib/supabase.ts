import { createClient } from "@supabase/supabase-js";

const supabaseUrl =
  process.env.SUPABASE_URL || "https://placeholder.supabase.co";
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || "placeholder";

// Ensure environment variables are loaded
if (!process.env.SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
  // Only warn in development, might explode in build if strictly validated
  if (process.env.NODE_ENV === "development") {
    console.warn("Missing Supabase environment variables");
  }
}

export const supabase = createClient(supabaseUrl, supabaseKey);
