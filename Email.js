const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
    host: "smtp.yandex.ru",
    port: 465,
    secure: true,
    auth: {
        user: 'RAXVODILA@yandex.by',
        pass:'cjfduhbocqpnkijc',
    },
});

const Code = Math.floor(100000 + Math.random() * 900000);
const Volk = 'etot code dlya nichego nakotets otpravlen';
transporter.sendMail({
    from: "RAXVODILA@yandex.by",
    to: "pokelovitel1220@gmail.com",
    subject: `Код для ничего`,
    text:'Код:',
    html: `<h2>Тот самый код:</h2>
        <p><h1>${Code}</h1></p>
        <p><h3>${Volk}</h3></p>`,
});
