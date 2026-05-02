import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { name, email, subject, message } = req.body as {
        name: string;
        email: string;
        subject?: string;
        message: string;
    };

    if (!name || !email || !message) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    try {
        const nodemailer = require('nodemailer');

        const transporter = nodemailer.createTransport({
            port: 465,
            host: 'smtp.gmail.com',
            auth: {
                user: process.env.SENDER_EMAIL,
                pass: process.env.SENDER_PASSWORD,
            },
            secure: true,
        });

        const mailSubject = subject?.trim() || 'Mensaje desde portfolio';

        await transporter.sendMail({
            from: process.env.SENDER_EMAIL,
            to: process.env.RECEIVER_EMAIL,
            subject: mailSubject,
            text: `${message}\n\nNombre: ${name}\nEmail: ${email}`,
            html: `<div>${message}</div><p>Nombre: ${name}</p><p>Email: ${email}</p>`,
        });

        return res.status(200).json({ ok: true });
    } catch (err) {
        console.error('[contact] sendMail error:', err);
        return res.status(500).json({ error: 'Failed to send email' });
    }
}
