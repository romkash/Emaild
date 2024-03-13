const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'gamakicisan@gmail.com',
        pass: 'YouTude125',
    }
});

const Code = Math.floor(100000 + Math.random() * 900000);

const mailOptions = {
    from: 'pokelovitel1220@gmail.com',
    to: 'melser1t4werka@gmail.com',
    subject: 'Код',
    text: `Ваш код: ${Code}`
};


transporter.sendMail(mailOptions, async (error, info) => {
    if (error) {
        console.error('Ошибка при отправке письма:', error);
    } else {
        console.log('Письмо успешно отправлено:', info.response);
    }
});

