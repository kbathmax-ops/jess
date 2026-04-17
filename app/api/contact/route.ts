import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const { name, email, subject, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  try {
    const { error } = await resend.emails.send({
      from: "Tattoos by Jess <bookings@tattoosbyjess.com>",
      to: "jessicawang@tattoosbyjess.com",
      replyTo: email,
      subject: `New booking enquiry: ${subject || "General"}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:32px;background:#1a1410;color:#f2ebd9;border-radius:8px">
          <h2 style="margin:0 0 24px;font-size:22px;letter-spacing:0.05em">New Enquiry</h2>
          <table style="width:100%;border-collapse:collapse">
            <tr><td style="padding:8px 0;color:rgba(242,235,217,0.5);width:100px">Name</td><td style="padding:8px 0">${name}</td></tr>
            <tr><td style="padding:8px 0;color:rgba(242,235,217,0.5)">Email</td><td style="padding:8px 0"><a href="mailto:${email}" style="color:#A63324">${email}</a></td></tr>
            <tr><td style="padding:8px 0;color:rgba(242,235,217,0.5)">Subject</td><td style="padding:8px 0">${subject || "—"}</td></tr>
          </table>
          <hr style="border:none;border-top:1px solid rgba(242,235,217,0.1);margin:20px 0"/>
          <p style="white-space:pre-wrap;line-height:1.7;margin:0">${message}</p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact route error:", err);
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }
}
