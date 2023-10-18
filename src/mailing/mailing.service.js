import nodemailer from 'nodemailer';
import config from '../config/enviroment.config.js';

class MailingService {
    constructor() {
        this.transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: config.MAIL_USER,
                pass: config.MAIL_PASS
            }
        });
    }

    send(mailOptions) {
        return this.transporter.sendMail(mailOptions);
    }
    async sendEmail(email) {
        const mailOption = {
            from: '',
            to: email,
            subject: 'Bienvenido a nuestra tienda',
            html: '<h1>Bienvenido a nuestra tienda</h1>'
        };
        const result = await this.transporter.sendMail(mailOption)
        return result;

    }
}

export default MailingService;