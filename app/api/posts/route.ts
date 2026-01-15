import { NextResponse } from "next/server";
import { supabase } from "@/app/lib/supabase";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const published = searchParams.get("published");

  try {
    let query = supabase
      .from("posts")
      .select("*")
      .order("created_at", { ascending: false });

    if (published === "true") {
      query = query.eq("published", true);
    }

    const { data, error } = await query;
    if (error) throw error;

    return NextResponse.json(data);
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Auto-generate slug if missing
    const slug =
      body.slug ||
      body.title
        .toLowerCase()
        .replace(/ /g, "-")
        .replace(/[^\w-]+/g, "");

    const post = {
      ...body,
      slug,
      created_at: new Date().toISOString(), // Ensure created_at in insert if not DB default
    };

    const { data, error } = await supabase
      .from("posts")
      .insert([post])
      .select()
      .single();

    if (error) throw error;

    return NextResponse.json(data, { status: 201 });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
