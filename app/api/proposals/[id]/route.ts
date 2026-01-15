import { NextResponse } from "next/server";
import { supabase } from "@/app/lib/supabase";
import { Resend } from "resend";

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = await params;

  try {
    const { data, error } = await supabase
      .from("proposals")
      .select("*")
      .eq("id", id)
      .single();

    if (error) throw error;
    if (!data) return NextResponse.json({}, { status: 404 });

    return NextResponse.json(data);
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = await params;

  try {
    const updates = await request.json();
    const { data, error } = await supabase
      .from("proposals")
      .update(updates)
      .eq("id", id)
      .select()
      .single();

    if (error) throw error;

    // Check status change for email
    if (updates.status === "accepted" && resend) {
      try {
        await resend.emails.send({
          from: "CodeRAM <onboarding@resend.dev>",
          to: ["darkness24zk@gmail.com"], // In prod, use data.email if domain verified
          subject: `¡Propuesta Aceptada! (Test for ${data.email}) - CodeRAM`,
          html: `
            <div style="font-family: sans-serif; padding: 20px;">
              <h2 style="color: #4F46E5;">¡Felicidades! Tu propuesta ha sido aceptada.</h2>
              <p>Hola <strong>${data.nombre}</strong>,</p>
              <p>Nos complace informarte que hemos revisado y aceptado tu propuesta para el servicio de <strong>${data.servicio}</strong>.</p>
              <p><strong>Detalles:</strong></p>
              <ul>
                <li>Empresa: ${data.empresa}</li>
                <li>Mensaje Original: ${data.mensaje}</li>
              </ul>
              <p>Pronto nos pondremos en contacto contigo para los siguientes pasos.</p>
              <br/>
              <p>Atentamente,</p>
              <p>El equipo de CodeRAM</p>
            </div>
          `,
        });
      } catch (emailErr) {
        console.error("Error sending acceptance email:", emailErr);
      }
    }

    return NextResponse.json(data);
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
