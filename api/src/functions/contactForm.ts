import {
  app,
  HttpRequest,
  HttpResponseInit,
  InvocationContext,
} from "@azure/functions";
import nodemailer from "nodemailer";

interface ContactFormBody {
  name: string;
  email: string;
  subject?: string;
  message: string;
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const corsHeaders = {
  "Access-Control-Allow-Origin": process.env.ALLOWED_ORIGIN ?? "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

function json(body: unknown, status = 200): HttpResponseInit {
  return {
    status,
    headers: { "Content-Type": "application/json", ...corsHeaders },
    body: JSON.stringify(body),
  };
}

app.http("sendContactEmail", {
  methods: ["POST", "OPTIONS"],
  authLevel: "anonymous",
  handler: async (
    req: HttpRequest,
    ctx: InvocationContext,
  ): Promise<HttpResponseInit> => {
    if (req.method === "OPTIONS") return { status: 204, headers: corsHeaders };

    // Parse
    let body: Partial<ContactFormBody>;
    try {
      body = (await req.json()) as Partial<ContactFormBody>;
    } catch {
      return json({ success: false, error: "Invalid JSON." }, 400);
    }

    // Validate
    const errors: string[] = [];
    if (!body.name?.trim()) errors.push("Name is required.");
    if (!body.email?.trim() || !EMAIL_REGEX.test(body.email))
      errors.push("Valid email is required.");
    if (!body.message?.trim()) errors.push("Message is required.");
    if (errors.length) return json({ success: false, errors }, 422);

    const name = body.name!.trim();
    const email = body.email!.trim();
    const message = body.message!.trim();
    const subject = body.subject?.trim() || `New contact from ${name}`;

    // Send
    try {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST ?? "mx.pps.mk.cust.hostedemail.com",
        port: Number(process.env.SMTP_PORT ?? 587),
        secure: process.env.SMTP_SECURE === "true",
        auth: {
          user: process.env.SMTP_USER!,
          pass: process.env.SMTP_PASS!,
        },
        tls: {
          // hostedemail uses shared/self-signed certs
          rejectUnauthorized: false,
        },
      });

      const info = await transporter.sendMail({
        from: `"${name}" <${process.env.SMTP_USER}>`,
        replyTo: email,
        to: process.env.RECIPIENT_EMAIL ?? process.env.SMTP_USER,
        subject,
        text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
        html: `
          <p><b>Name:</b> ${name}</p>
          <p><b>Email:</b> ${email}</p>
          <p><b>Subject:</b> ${subject}</p>
          <hr/>
          <p>${message.replace(/\n/g, "<br>")}</p>
        `,
      });

      ctx.log("Email sent:", info.messageId);
      return json({ success: true });
    } catch (err) {
      ctx.error("SMTP error:", err);
      return json({ success: false, error: "Failed to send email." }, 500);
    }
  },
});
