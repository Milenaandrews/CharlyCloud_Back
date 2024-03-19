const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // Use `true` for port 465, `false` for all other ports
    auth: {
        user: "mileandrews@gmail.com",
        pass: "tafq uizv ionc tgct",
    },
});

transporter.verify().then( ()=>{
    console.log('listo para enviar correo')
})

module.exports = {transporter}