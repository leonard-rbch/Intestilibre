import { NextResponse } from "next/server";
import sgMail from "@sendgrid/mail";

// Configure la clé API depuis l'environnement
sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

export async function POST(req: Request) {
  try {
    const { nom, prenom, email, telephone, message } = await req.json();

    await sgMail.send({
      to: process.env.SENDGRID_TO!,
      from: process.env.SENDGRID_FROM!,
      subject: "Nouveau message depuis le formulaire",
      text: `
Nom: ${nom}
Prénom: ${prenom}
Email: ${email}
Téléphone: ${telephone}
Message: ${message}
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
