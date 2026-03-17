import express from "express";
import { createServer as createViteServer } from "vite";
import { Resend } from "resend";
import dotenv from "dotenv";
import path from "path";

dotenv.config();

const resend = new Resend(process.env.RESEND_API_KEY);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API route for lead submission (Onboarding)
  app.post("/api/submit-brief", async (req, res) => {
    const { businessName, email, phone, message, outcomes, website, size, market, socials } = req.body;

    try {
      const { data, error } = await resend.emails.send({
        from: 'NuStudios <info@send.nustudios.co.uk>',
        to: ['tech@nustudios.co.uk'],
        reply_to: 'info@nustudios.co.uk',
        subject: `New Onboarding Brief: ${businessName}`,
        html: `
          <h1>New Onboarding Brief</h1>
          <p><strong>Business Name:</strong> ${businessName}</p>
          <p><strong>Website:</strong> ${website}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Team Size:</strong> ${size}</p>
          <p><strong>Market:</strong> ${market}</p>
          <p><strong>Socials:</strong> Instagram: ${socials?.instagram}, TikTok: ${socials?.tiktok}, LinkedIn: ${socials?.linkedin}</p>
          <p><strong>Outcomes:</strong> ${outcomes?.join(", ")}</p>
          <p><strong>Message:</strong> ${message}</p>
        `,
      });

      if (error) throw error;
      res.json({ success: true, data });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ success: false, error: "Failed to send email" });
    }
  });

  // API route for general contact
  app.post("/api/contact", async (req, res) => {
    const { firstName, lastName, email, message } = req.body;

    try {
      const { data, error } = await resend.emails.send({
        from: 'NuStudios <info@send.nustudios.co.uk>',
        to: ['tech@nustudios.co.uk'],
        reply_to: 'info@nustudios.co.uk',
        subject: `New Contact Message from ${firstName} ${lastName}`,
        html: `
          <h1>New Contact Message</h1>
          <p><strong>Name:</strong> ${firstName} ${lastName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong> ${message}</p>
        `,
      });

      if (error) throw error;
      res.json({ success: true, data });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ success: false, error: "Failed to send email" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    // Serve static files in production
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
