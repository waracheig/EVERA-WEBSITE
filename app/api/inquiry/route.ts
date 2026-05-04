import { NextResponse } from "next/server";

export const runtime = "nodejs";

type InquiryPayload = {
  name?: string;
  company?: string;
  email?: string;
  phone?: string;
  segment?: string;
  size?: string;
  message?: string;
  source?: string;
};

const REQUIRED: (keyof InquiryPayload)[] = ["name", "company", "email", "phone"];
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function buildEmail(p: InquiryPayload) {
  const rows: [string, string | undefined][] = [
    ["Source", p.source],
    ["Name", p.name],
    ["Company", p.company],
    ["Email", p.email],
    ["Phone", p.phone],
    ["Segment", p.segment],
    ["Fleet size", p.size],
    ["Message", p.message],
  ];
  const html = `
    <h2 style="font-family:Inter,Arial,sans-serif;color:#1A2E4A;margin:0 0 16px">New EvEra inquiry</h2>
    <table style="border-collapse:collapse;font-family:Inter,Arial,sans-serif;font-size:14px;color:#1A1A2E">
      ${rows
        .filter(([, v]) => v && v.trim() !== "")
        .map(
          ([k, v]) => `
        <tr>
          <td style="padding:6px 16px 6px 0;color:#4A6080;vertical-align:top;white-space:nowrap"><b>${escapeHtml(
            k
          )}</b></td>
          <td style="padding:6px 0;border-left:2px solid #E2E8F0;padding-left:16px">${escapeHtml(
            v!
          )}</td>
        </tr>`
        )
        .join("")}
    </table>
    <p style="font-family:Inter,Arial,sans-serif;font-size:12px;color:#8FA3BC;margin-top:24px">
      Submitted ${new Date().toISOString()}
    </p>
  `;
  const text = rows
    .filter(([, v]) => v && v.trim() !== "")
    .map(([k, v]) => `${k}: ${v}`)
    .join("\n");
  return { html, text };
}

async function sendViaResend(payload: InquiryPayload): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.INQUIRY_TO_EMAIL || "ev@easynetwork.co.th";
  const from = process.env.INQUIRY_FROM_EMAIL || "EvEra Website <onboarding@resend.dev>";
  if (!apiKey) {
    console.log("[inquiry] RESEND_API_KEY not set — falling back to console log:", {
      receivedAt: new Date().toISOString(),
      ...payload,
    });
    return;
  }

  const { html, text } = buildEmail(payload);
  const subject = `EvEra inquiry — ${payload.source || "website"} — ${payload.company || payload.name || "unknown"}`;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: payload.email,
      subject,
      html,
      text,
    }),
  });

  if (!res.ok) {
    const errBody = await res.text().catch(() => "");
    throw new Error(`Resend send failed: ${res.status} ${errBody}`);
  }
}

export async function POST(request: Request) {
  let body: InquiryPayload;
  try {
    body = (await request.json()) as InquiryPayload;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  const missing = REQUIRED.filter((k) => !body[k]?.toString().trim());
  if (missing.length) {
    return NextResponse.json(
      { ok: false, error: `Missing fields: ${missing.join(", ")}` },
      { status: 422 }
    );
  }

  if (!EMAIL_RE.test(body.email!)) {
    return NextResponse.json({ ok: false, error: "Invalid email" }, { status: 422 });
  }

  try {
    await sendViaResend(body);
  } catch (err) {
    console.error("[inquiry] delivery failed:", err);
    return NextResponse.json(
      { ok: false, error: "Could not deliver inquiry. Please try again or call us." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
