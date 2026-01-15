import { NextResponse } from "next/server";
import { supabase } from "@/app/lib/supabase";

// GET /posts/:slug (Fetch by Slug)
export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  const { slug } = await params;

  try {
    const { data, error } = await supabase
      .from("posts")
      .select("*")
      .eq("slug", slug)
      .single();

    if (error) throw error;
    if (!data) return NextResponse.json({}, { status: 404 });

    return NextResponse.json(data);
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

// PATCH /posts/:id (Update by ID)
// Note: We name the param 'slug' because Next.js file is [slug], but for PATCH/DELETE we treat it as ID
export async function PATCH(
  request: Request,
  { params }: { params: { slug: string } }
) {
  const { slug: id } = await params; // Aliasing slug to id for clarity

  try {
    const changes = await request.json();
    const { data, error } = await supabase
      .from("posts")
      .update({ ...changes, updated_at: new Date().toISOString() })
      .eq("id", id)
      .select()
      .single();

    if (error) throw error;

    return NextResponse.json(data);
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

// DELETE /posts/:id (Delete by ID)
export async function DELETE(
  request: Request,
  { params }: { params: { slug: string } }
) {
  const { slug: id } = await params;

  try {
    const { error } = await supabase.from("posts").delete().eq("id", id);

    if (error) throw error;

    return new NextResponse(null, { status: 204 });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
