import { NextResponse } from "next/server";
import { supabase } from "@/app/lib/supabase";

// PUT /content/:id (or PATCH)
export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = await params;

  try {
    const body = await request.json();
    const { data, error } = await supabase
      .from("content")
      .update(body)
      .eq("id", id)
      .select()
      .single();

    if (error) throw error;

    return NextResponse.json(data);
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  return PUT(request, { params });
}
