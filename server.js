const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const Mailjet = require("node-mailjet");
require("dotenv").config({ path: ".env.local" });

server.use(middlewares);
server.use(jsonServer.bodyParser);

// Mailjet configuration
const mailjet = Mailjet.apiConnect(
  process.env.MAILJET_API_KEY || "your-api-key",
  process.env.MAILJET_SECRET_KEY || "your-secret-key"
);

// Custom route to intercept proposal creation
server.post("/proposals", (req, res, next) => {
  const proposal = req.body;

  // Continue with json-server default behavior (save to db)
  // We use a callback to ensure we send email after saving,
  // but json-server middleware chain is a bit different.
  // Simplest way is to let json-server handle the save, but we need to hook into it.
  // Alternatively, we can just send the email and then call next().

  if (process.env.MAILJET_API_KEY && process.env.MAILJET_SECRET_KEY) {
    const request = mailjet.post("send", { version: "v3.1" }).request({
      Messages: [
        {
          From: {
            Email: "infocodram@gmail.com", // Replace with a verified sender
            Name: "CodeRAM Admin",
          },
          To: [
            {
              Email: "infocodram@gmail.com", // Send to admin
              Name: "Admin",
            },
          ],
          Subject: "Nueva Propuesta Recibida - CodeRAM",
          TextPart: `Nueva propuesta de ${proposal.nombre}`,
          HTMLPart: `
                            <h3>Nueva Propuesta Recibida</h3>
                            <p><strong>Nombre:</strong> ${proposal.nombre}</p>
                            <p><strong>Email:</strong> ${proposal.email}</p>
                            <p><strong>Empresa:</strong> ${proposal.empresa}</p>
                            <p><strong>Servicio:</strong> ${proposal.servicio}</p>
                            <p><strong>Mensaje:</strong> ${proposal.mensaje}</p>
                            <br/>
                            <a href="http://localhost:3000/admin/dashboard">Ver en Dashboard</a>
                        `,
          CustomID: "AppGettingStartedTest",
        },
      ],
    });

    request
      .then((result) => {
        console.log("Email sent successfully");
      })
      .catch((err) => {
        console.log("Error sending email:", err.statusCode);
      });
  } else {
    console.log("Mailjet credentials not found. Skipping email.");
  }

  next();
});

server.use(router);

server.listen(3001, () => {
  console.log("JSON Server is running on port 3001");
});
