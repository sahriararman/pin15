import { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from 'nodemailer';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Only POST requests allowed' });
  }

  const { name, email, phone, company, message, honeypot } = req.body;

  if (honeypot) {
    return res.status(400).json({ message: 'Potential spam detected' });
  }

  const messageId = `<${Date.now()}.${email}@hello.pinclimb.com>`;

  const transporter = nodemailer.createTransport({
    host: 'smtp.hostinger.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: '"Pinclimb Contact" <contact@hello.pinclimb.com>',
    to: 'contact@hello.pinclimb.com',
    replyTo: email,
    subject: `New Message from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone || 'Not provided'}\nCompany: ${company || 'Not provided'}\nMessage: ${message}`,
    headers: {
      'Message-ID': messageId,
      'In-Reply-To': `<${email}>`,
      'References': `<${email}>`,
    },
  };

  try {
    await transporter.sendMail(mailOptions);
    return res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ message: 'Failed to send email' });
  }
}
