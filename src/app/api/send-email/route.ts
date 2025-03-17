import nodemailer from 'nodemailer';
import SMTPTransport from 'nodemailer/lib/smtp-transport';

import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const body = await req.json();
  const { name, email, whatsapp, message } = body as {
    name: string;
    email: string;
    whatsapp: number;
    message: string;
  };

  const smtpOptions: SMTPTransport.Options = {
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: Number(process.env.SMTP_PORT) === 465,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  };

  const transporter = nodemailer.createTransport(smtpOptions);

  try {
    await transporter.sendMail({
      from: `"${name}" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_TO,
      subject: '[Site] Nova mensagem',
      html: `
        <h2>Nova mensagem recebida</h2>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>WhatsApp:</strong> ${whatsapp}</p>
        <p><strong>Mensagem:</strong><br> ${message}</p>
      `,
      replyTo: email,
    });

    return NextResponse.json({ success: true });
  } 
  
  catch (error: any) 
  {console.error('Erro ao enviar email:', error);
  return NextResponse.json({ success: false, error: error.message }, { status: 500 });}
}