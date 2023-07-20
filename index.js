require('dotenv').config({path: ".env"})
const { createTransport } = require('nodemailer');

const transporter = createTransport({
    host: process.env.SMTP_RELAY,
    port: process.env.SMTP_PORT,
    auth: {
        user: process.env.SMTP_USERNAME,
        pass: process.env.SMTP_KEY,
    },
});

const mailOptions = {
    from: process.env.SMTP_FROM,
    to: 'bayu.sangkaya@bayuskylabs.com',
    subject: `Test email from node`,
    text: `This is email from node js`
};

transporter.sendMail(mailOptions, function(error, info){
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});