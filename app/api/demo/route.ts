import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, company, timezone, message } = body;

    if (!name || !email || !company || !timezone) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    const rows: [string, string][] = [
      ["Nome", name],
      ["E-mail", email],
      ["Empresa", company],
      ["Timezone", timezone],
    ];
    if (message) rows.push(["Mensagem", message]);

    const html = `
      <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;background:#050d1f;color:#ffffff;padding:32px;border-radius:12px;">
        <div style="margin-bottom:24px;">
          <span style="background:#2563eb;color:#fff;font-size:11px;font-weight:700;letter-spacing:1px;padding:4px 10px;border-radius:100px;">ZELT</span>
        </div>
        <h2 style="font-size:22px;font-weight:900;margin:0 0 8px;">Nova solicitação de demo</h2>
        <p style="color:rgba(255,255,255,0.45);font-size:14px;margin:0 0 28px;">Formulário preenchido em ${new Date().toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" })}</p>
        <table style="width:100%;border-collapse:collapse;font-size:14px;">
          <tbody>
            ${rows
              .map(
                ([label, value], i) => `
              <tr style="background:${i % 2 === 0 ? "rgba(255,255,255,0.04)" : "rgba(255,255,255,0.02)"}">
                <td style="padding:12px 16px;color:rgba(255,255,255,0.45);width:160px;font-weight:600;vertical-align:top;">${label}</td>
                <td style="padding:12px 16px;color:#ffffff;white-space:pre-wrap;">${value}</td>
              </tr>`
              )
              .join("")}
          </tbody>
        </table>
        <div style="margin-top:28px;padding-top:20px;border-top:1px solid rgba(255,255,255,0.08);font-size:12px;color:rgba(255,255,255,0.25);">
          Enviado automaticamente por zelt.finance
        </div>
      </div>
    `;

    if (process.env.SMTP_USER && process.env.SMTP_PASS && process.env.SMTP_PASS !== "your_gmail_app_password_here") {
      try {
        const transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
          },
        });
        await transporter.sendMail({
          from: `"Zelt" <${process.env.SMTP_USER}>`,
          to: "vitorsouzaguiar@gmail.com",
          subject: `[ZELT] Agendar demo - ${company}`,
          html,
        });
      } catch (emailErr) {
        console.error("[demo] Email send failed:", emailErr);
      }
    } else {
      console.log("[demo] SMTP not configured — skipping email. Submission:", { name, email, company, timezone, message });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[demo] Handler error:", err);
    return NextResponse.json({ error: "Internal error" }, { status: 500 });
  }
}
