import express from "express";
import { createServer as createViteServer } from "vite";
import { Resend } from "resend";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

async function startServer() {
  const PORT = 3000;
  
  // Initialize Resend with API Key from environment
  const resend = new Resend(process.env.RESEND_API_KEY);

  app.use(express.json());

  // API Route for Newsletter Subscription
  app.post("/api/subscribe", async (req, res) => {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ error: "Email is required" });
    }

    try {
      // Send notification to your email
      const { data, error } = await resend.emails.send({
        from: "Mizrahi Sweets <onboarding@resend.dev>",
        to: "djrazbeat@gmail.com",
        subject: "🎉 נרשם חדש לניוזלטר!",
        html: `<p>משתמש חדש נרשם לניוזלטר באתר מזרחי:</p>
               <p><strong>כתובת מייל:</strong> ${email}</p>
               <p>תאריך: ${new Date().toLocaleString('he-IL')}</p>`,
      });

      if (error) {
        console.error("Resend Error:", error);
        return res.status(500).json({ error: "Failed to send email" });
      }

      res.status(200).json({ success: true, data });
    } catch (err) {
      console.error("Subscription Error:", err);
      res.status(500).json({ error: "Internal server error" });
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
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  // Only listen if not running as a Vercel function
  if (process.env.NODE_ENV !== "production" || !process.env.VERCEL) {
    app.listen(PORT, "0.0.0.0", () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  }
}

startServer();

export default app;
