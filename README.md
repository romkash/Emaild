1. ПОДКЛЮЧИЛ БИБЛИОТЕКУ NODEMAILER Т.К ОНА ПОЗВОЛЯЕТ ОТПРАВЛ СООБЩ
   const nodemailer = require('nodemailer');
2. СОЗДАЛ TRANSPORT С ПОМОЩЬЮ К-Т БУДУТ ОТПРАВЛЯТЬСЯ ПИСЬМА
 const transporter = nodemailer.createTransport
3. УКАЗАЛ ПАРАМЕТРЫ ДЛЯ ПОДКЛЮЧЕНИЯ К СЕРВЕРУ-SMPT
    host: "smtp.yandex.ru",
    port: 465,
    secure: true,
    auth: {
        user: '',
        pass:'',}
4. СГЕНЕРИРОВАЛ РАНДОМНОЕ 6-ЗНАЧНОЕ ЧИСЛО
      const Code = Math.floor(100000 + Math.random() * 900000);
5. НАПИСАЛ БЕСПОЛЕЗНУЮ КОМАНДУ
   const Volk = 'etot code dlya nichego nakotets otpravlen';
6. ОТПРАВКА САМОГО СООБЩЕНИЯ :
   transporter.sendMail({
    from: "RAXVODILA@yandex.by", //как в обычной отправке письма кому-либо, указываем всякую херь
    to: "pokelovitel1220@gmail.com",
    subject: `Код для ничего`,
    text:'Код:',
    html: `<h2>Тот самый код:</h2>
        <p><h1>${Code}</h1></p>
        <p><h3>${Volk}</h3></p>`,
});  /*
ЕСЛИ В ТЕРМИНАЛЕ ПОЯВИЛОСЬ СООБЩЕНИЕ - Process finished with exit code 0 ,
ТО КОД УСПЕШНО ОТПРАВИЛСЯ , В ИНЫХ СЛУЧАЯХ НУЖНО ЧЕКНУТЬ ПАРОЛЬ И ЛОГИН И Т.П */
