import WelcomeTemplate from "@/emails/WelcomeTemplate";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  await resend.emails.send({
    from: "hlidar@hlidar.tk",
    to: "hlidar85@gmail.com",
    subject: "Programming test",
    react: <WelcomeTemplate name="Hlíðar" />,
  });
  return NextResponse.json({});
}
