/* eslint-disable import/no-anonymous-default-export */
import type { NextApiRequest, NextApiResponse } from 'next'

export default (req: NextApiRequest, res: NextApiResponse) => {
    require('dotenv').config();

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
        subject: req.body.subject !== "" ? req.body.subject : 'Sin asunto',
        text: req.body.message + " | Email: " + req.body.email,
        html: `<div>${req.body.message}</div><p>Email:
      ${req.body.email}</p>`
    };
    transporter.sendMail(mailData, function (err: Error, info: any) {
        if (err)
            console.log(err)
        else
            console.log(info)
    })
    res.status(200)
}