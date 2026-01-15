import { NextResponse } from "next/server";
import { supabase } from "@/app/lib/supabase";
import { Resend } from "resend";

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const sort = searchParams.get("_sort");
  const order = searchParams.get("_order");

  try {
    let query = supabase.from("proposals").select("*");

    // Handle sorting
    if (sort) {
      const ascending = order !== "desc";
      query = query.order(sort, { ascending });
    } else {
      query = query.order("date", { ascending: false });
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
    const proposal = {
      ...body,
      date: new Date().toISOString(),
      status: "pending",
    };

    const { data, error } = await supabase
      .from("proposals")
      .insert([proposal])
      .select()
      .single();

    if (error) throw error;

    // Send email notification
    if (resend) {
      try {
        await resend.emails.send({
          from: "CodeRAM <onboarding@resend.dev>",
          to: ["darkness24zk@gmail.com"],
          subject: "Nueva Propuesta Recibida - CodeRAM",
          html: `
            <h3>Nueva Propuesta Recibida</h3>
            <p><strong>Nombre:</strong> ${data.nombre}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>Empresa:</strong> ${data.empresa}</p>
            <p><strong>Servicio:</strong> ${data.servicio}</p>
            <p><strong>Mensaje:</strong> ${data.mensaje}</p>
            <br/>
            <a href="${
              process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"
            }/admin/dashboard">Ver en Dashboard</a>
          `,
        });
      } catch (emailErr) {
        console.error("Error sending admin notification:", emailErr);
      }
    }

    return NextResponse.json(data, { status: 201 });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
