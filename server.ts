import express from "express";
import { Resend } from "resend";
import dotenv from "dotenv";
import path from "path";

dotenv.config();

const resend = new Resend(process.env.RESEND_API_KEY);

function escapeHtml(str: string) {
  if (!str) return "";
  return str
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

const app = express();
app.use(express.json());

// API route for lead submission (Onboarding)
app.post("/api/submit-brief", async (req, res) => {
    const { businessName, email, phone, message, outcomes, website, size, market, socials, attachment } = req.body;
    const senderEmail = email.trim();
    const senderName = businessName.trim();
    const timestamp = new Date().toISOString();
    const sourceUrl = req.headers.referer || "Onboarding Page";

    try {
      const emailOptions: any = {
        from: 'NuStudios <info@send.nustudios.co.uk>',
        to: ['tech@nustudios.co.uk', 'caroline.pires2d@gmail.com'],
        reply_to: senderEmail,
        subject: `New Onboarding Brief: ${senderName}`,
        text: `
New Onboarding Brief

Business Name: ${senderName}
Website: ${website}
Email: ${senderEmail}
Phone: ${phone}
Team Size: ${size}
Market: ${market}
Socials: Instagram: ${socials?.instagram}, TikTok: ${socials?.tiktok}, LinkedIn: ${socials?.linkedin}
Outcomes: ${outcomes?.join(", ")}

Message:
${message}

Timestamp: ${timestamp}
Source: ${sourceUrl}
        `.trim(),
        html: `
          <div style="font-family:Arial,sans-serif;line-height:1.6;color:#111">
            <h2>New Onboarding Brief</h2>
            <p><strong>Business Name:</strong> ${escapeHtml(senderName)}</p>
            <p><strong>Website:</strong> ${escapeHtml(website)}</p>
            <p><strong>Email:</strong> ${escapeHtml(senderEmail)}</p>
            <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
            <p><strong>Team Size:</strong> ${escapeHtml(size)}</p>
            <p><strong>Market:</strong> ${escapeHtml(market)}</p>
            <p><strong>Socials:</strong> Instagram: ${escapeHtml(socials?.instagram)}, TikTok: ${escapeHtml(socials?.tiktok)}, LinkedIn: ${escapeHtml(socials?.linkedin)}</p>
            <p><strong>Outcomes:</strong> ${escapeHtml(outcomes?.join(", "))}</p>
            <p><strong>Message:</strong></p>
            <div style="white-space:pre-wrap">${escapeHtml(message)}</div>
            <hr />
            <p style="font-size:12px;color:#666">
              <strong>Timestamp:</strong> ${timestamp}<br />
              <strong>Source:</strong> ${sourceUrl}
            </p>
          </div>
        `,
      };

      if (attachment && attachment.content && attachment.filename) {
        emailOptions.attachments = [
          {
            filename: attachment.filename,
            content: attachment.content, // Base64 string
          },
        ];
      }

      const { data, error } = await resend.emails.send(emailOptions);

      if (error) throw error;
      res.json({ success: true, data });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ success: false, error: "Failed to send email" });
    }
  });

  // API route for general contact
  app.post("/api/contact", async (req, res) => {
    const { firstName, lastName, email, message, subject: userSubject, attachment } = req.body;
    const senderEmail = email.trim();
    const senderName = `${firstName} ${lastName}`.trim();
    const subject = (userSubject || "New website enquiry").trim();
    const timestamp = new Date().toISOString();
    const sourceUrl = req.headers.referer || "Contact Page";

    try {
      const emailOptions: any = {
        from: 'NuStudios <info@send.nustudios.co.uk>',
        to: ['tech@nustudios.co.uk', 'caroline.pires2d@gmail.com'],
        reply_to: senderEmail,
        subject: `Website enquiry: ${subject}`,
        text: `
New website enquiry

Name: ${senderName}
Email: ${senderEmail}
Subject: ${subject}

Message:
${message}

Timestamp: ${timestamp}
Source: ${sourceUrl}
        `.trim(),
        html: `
          <div style="font-family:Arial,sans-serif;line-height:1.6;color:#111">
            <h2>New website enquiry</h2>
            <p><strong>Name:</strong> ${escapeHtml(senderName)}</p>
            <p><strong>Email:</strong> ${escapeHtml(senderEmail)}</p>
            <p><strong>Subject:</strong> ${escapeHtml(subject)}</p>
            <p><strong>Message:</strong></p>
            <div style="white-space:pre-wrap">${escapeHtml(message)}</div>
            <hr />
            <p style="font-size:12px;color:#666">
              <strong>Timestamp:</strong> ${timestamp}<br />
              <strong>Source:</strong> ${sourceUrl}
            </p>
          </div>
        `,
      };

      if (attachment && attachment.content && attachment.filename) {
        emailOptions.attachments = [
          {
            filename: attachment.filename,
            content: attachment.content, // Base64 string
          },
        ];
      }

      const { data, error } = await resend.emails.send(emailOptions);

      if (error) throw error;
      res.json({ success: true, data });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ success: false, error: "Failed to send email" });
    }
  });

async function startServer() {
  const PORT = process.env.PORT || 3000;

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const { createServer: createViteServer } = await import("vite");
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

if (!process.env.VERCEL) {
  startServer();
}

export default app;
