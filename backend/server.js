const express = require("express");
const cors = require("cors");
const path = require("path");
const { Resend } = require("resend");
const supabase = require("./supabaseClient");
require("dotenv").config({ path: path.join(__dirname, "../.env.local") });

const app = express();
const port = 3001;

// Initialize Resend
let resend;
if (process.env.RESEND_API_KEY) {
  resend = new Resend(process.env.RESEND_API_KEY);
  console.log("Resend initialized successfully.");
} else {
  console.warn("RESEND_API_KEY is missing. Email sending will be disabled.");
}

// Middleware
app.use(cors());
app.use(express.json()); // Manual body parsing needed now since we aren't using json-server middleware

// --- Routes ---

// GET /users (for checking admin auth)
app.get("/users", async (req, res) => {
  const { email, password } = req.query;
  try {
    let query = supabase.from("users").select("*");
    if (email) query = query.eq("email", email);
    if (password) query = query.eq("password", password);

    const { data, error } = await query;
    if (error) throw error;
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET /proposals
app.get("/proposals", async (req, res) => {
  const { _sort, _order } = req.query;
  try {
    let query = supabase.from("proposals").select("*");

    // Handle sorting (mapping json-server style to supabase)
    if (_sort) {
      const order = _order === "desc" ? false : true; // ascending by default
      query = query.order(_sort, { ascending: order });
    } else {
      // Default sort
      query = query.order("date", { ascending: false });
    }

    const { data, error } = await query;
    if (error) throw error;
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET /proposals/:id
app.get("/proposals/:id", async (req, res) => {
  try {
    const { data, error } = await supabase
      .from("proposals")
      .select("*")
      .eq("id", req.params.id)
      .single();
    if (error) throw error;
    if (!data) return res.status(404).json({});
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST /proposals
app.post("/proposals", async (req, res) => {
  try {
    const proposal = {
      ...req.body,
      date: new Date().toISOString(),
      status: "pending", // Default status
    };

    const { data, error } = await supabase
      .from("proposals")
      .insert([proposal])
      .select()
      .single();

    if (error) throw error;

    console.log(
      `New proposal created by ${data.nombre}. Sending admin notification...`
    );

    if (resend) {
      console.log("Attempting to send new proposal email...");
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
                   <a href="http://localhost:3000/admin/dashboard">Ver en Dashboard</a>
               `,
        });
      } catch (emailErr) {
        console.error("Error sending admin notification:", emailErr);
      }
    }

    res.status(201).json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// PATCH /proposals/:id
app.patch("/proposals/:id", async (req, res) => {
  const { id } = req.params;
  const updates = req.body;

  try {
    const { data, error } = await supabase
      .from("proposals")
      .update(updates)
      .eq("id", id)
      .select()
      .single();

    if (error) throw error;

    // Check if status changed to accepted
    if (updates.status === "accepted") {
      console.log(`Proposal accepted for ${data.nombre}. Sending email...`);
      if (resend) {
        console.log("Attempting to send acceptance email...");
        try {
          const emailResponse = await resend.emails.send({
            from: "CodeRAM <onboarding@resend.dev>",
            // RESTRICTION: Free Resend account only sends to verified email
            to: ["darkness24zk@gmail.com"],
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
          console.log("Email sent successfully:", emailResponse);
        } catch (error) {
          console.error("Error sending email:", error);
        }
      }
    }

    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET /content
app.get("/content", async (req, res) => {
  try {
    const { data, error } = await supabase.from("content").select("*");
    if (error) throw error;
    // Transform user friendly array to json-server style if needed,
    // but frontend likely expects array.
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET /content/:id (Just in case)
app.get("/content/:id", async (req, res) => {
  try {
    const { data, error } = await supabase
      .from("content")
      .select("*")
      .eq("id", req.params.id)
      .single();
    if (error) throw error;
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// PUT /content/:id (CMS uses PUT)
app.put("/content/:id", async (req, res) => {
  try {
    const { id } = req.params;
    // In Supabase update or insert (upsert) usually, but here we update existing
    const { data, error } = await supabase
      .from("content")
      .update(req.body)
      .eq("id", id)
      .select()
      .single();
    if (error) throw error;
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// PATCH /content/:id (Assuming content updates use PATCH)
app.patch("/content/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { data, error } = await supabase
      .from("content")
      .update(req.body)
      .eq("id", id)
      .select()
      .single();
    if (error) throw error;
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// --- Blog Posts Routes ---

// GET /posts (Public)
app.get("/posts", async (req, res) => {
  try {
    let query = supabase
      .from("posts")
      .select("*")
      .order("created_at", { ascending: false });

    // Optional: Filter by published status if not admin (simplified logic here)
    if (req.query.published === "true") {
      query = query.eq("published", true);
    }

    const { data, error } = await query;
    if (error) throw error;
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET /posts/:slug (Public)
app.get("/posts/:slug", async (req, res) => {
  try {
    const { data, error } = await supabase
      .from("posts")
      .select("*")
      .eq("slug", req.params.slug)
      .single();

    if (error) throw error;
    if (!data) return res.status(404).json({});
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST /posts (Admin)
app.post("/posts", async (req, res) => {
  try {
    const post = {
      ...req.body,
      // Ensure slug is generated if not provided (simple version)
      slug:
        req.body.slug ||
        req.body.title
          .toLowerCase()
          .replace(/ /g, "-")
          .replace(/[^\w-]+/g, ""),
    };

    const { data, error } = await supabase
      .from("posts")
      .insert([post])
      .select()
      .single();

    if (error) throw error;
    res.status(201).json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// PATCH /posts/:id (Admin)
app.patch("/posts/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { data, error } = await supabase
      .from("posts")
      .update({ ...req.body, updated_at: new Date().toISOString() })
      .eq("id", id)
      .select()
      .single();

    if (error) throw error;
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// DELETE /posts/:id (Admin)
app.delete("/posts/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { error } = await supabase.from("posts").delete().eq("id", id);

    if (error) throw error;
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// --- End Blog Routes ---

app.listen(port, () => {
  console.log(`Backend Application (Supabase) running on port ${port}`);
});
