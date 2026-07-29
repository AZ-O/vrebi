import { NextResponse } from "next/server";
import { Resend } from "resend";
import WelcomeEmail from "@/emails/welcome-email";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email || typeof email !== "string") {
      return NextResponse.json(
        { error: "A valid email is required." },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: "Vrebi <hello@vrebi.com>",
      to: email,
      subject: "Welcome to the future of your life ✨",
      react: WelcomeEmail(),
    });

    if (error) {
      console.error("Resend error:", error);

      return NextResponse.json(
        { error: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      data,
    });
  } catch (error) {
    console.error("Welcome email error:", error);

    return NextResponse.json(
      { error: "Failed to send welcome email." },
      { status: 500 }
    );
  }
}