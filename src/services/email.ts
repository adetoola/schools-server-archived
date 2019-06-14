import { config } from 'dotenv';
import * as nodeMailer from 'nodemailer';

config();

const options = {
  host: process.env.MAIL_HOST,
  port: parseInt(process.env.MAIL_PORT, 10),
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
};

const transporter = nodeMailer.createTransport(options);

const makeANiceEmail = (text: string): string => `
    <div className="email" style="
      border: 1px solid black;
      padding: 20px;
      font-family: sans-serif;
      line-height: 2;
      font-size: 20px;
    ">
      <h2>Hello There!</h2>
      <p>${text}</p>

      <p>😘, Ruby Schools</p>
    </div>
  `;

const sendEmail = async (to: string, subject: string, text: string): Promise<{}> => {
  // send mail with defined transport object
  return await transporter.sendMail({
    from: '"Ruby Schools" <hello@schools.com>',
    to,
    subject,
    html: makeANiceEmail(text),
  });
};

export default sendEmail;
