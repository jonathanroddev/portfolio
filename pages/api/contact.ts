/* eslint-disable import/no-anonymous-default-export */
import type { NextApiRequest, NextApiResponse } from 'next'
import { Email } from "../../src/models/Email";

export default (req: NextApiRequest, res: NextApiResponse) => {
    require('dotenv').config();
    const email = req.body as Email;
    let nodemailer = require('nodemailer');
    const transporter = nodemailer.createTransport({
        port: 465,
        host: "smtp.gmail.com",
        auth: {
            user: process.env.SENDER_EMAIL,
            pass: process.env.SENDER_PASSWORD,
        },
        secure: true,
    });
    const mailData = {
        from: process.env.SENDER_EMAIL,
        to: process.env.RECEIVER_EMAIL,
        subject: email.subject !== "" ? email.subject : 'Sin asunto',
        text: email.message + " | Email: " + email.email,
        html: `<div>${email.message}</div><p>Email:
      ${email.email}</p>`
    };
    transporter.sendMail(mailData, function (err: Error, info: any) {
        if (err)
            console.log(err)
        else
            console.log(info)
    })
    res.status(200)
}