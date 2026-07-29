import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    const { error } = await resend.emails.send({
      from: "Vrebi <hello@vrebi.com>",
      to: email,
      subject: "Welcome to Vrebi ✨",
      html: `
        <div style="background:#0a0a0a;padding:60px 30px;font-family:Inter,Arial,sans-serif;color:white;">
          <div style="max-width:560px;margin:auto;">
            <h1 style="font-size:36px;margin-bottom:24px;">
              Welcome to Vrebi.
            </h1>

            <p style="font-size:18px;line-height:1.8;color:#d1d5db;">
              You're officially on the waitlist.
            </p>

            <p style="font-size:18px;line-height:1.8;color:#d1d5db;">
              We're building an AI Life Operating System that helps you
              remember everything, connect the dots, and make better decisions.
            </p>

            <p style="font-size:18px;line-height:1.8;color:#d1d5db;">
              You'll be among the first to receive early access and product
              updates.
            </p>

            <p style="margin-top:40px;font-size:18px;">
              — The Vrebi Team
            </p>
          </div>
        </div>
      `,
    });

    if (error) throw error;

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { success: false },
      { status: 500 }
    );
  }
}