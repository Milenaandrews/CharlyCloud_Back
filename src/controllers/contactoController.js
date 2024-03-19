const Contacto = require("../models/Contacto")
import { transporter } from "../config/data/mailer"


const guardarContacto = async(req, res)=>{
    try {
        const nuevoContacto = new Contacto(req.body)
        await nuevoContacto.save()
        res.json ({success: true, msg:"Contacto Guardado", info: nuevoContacto})

    } catch (error) {
        res.status(500).json({success: false, msg: error.message})
    }
}

try 
    {
        // send mail with defined transport object
        const info = await transporter.sendMail({
          from: 'Correo de pba" <mileandrews@gmail.com>', // sender address
          to: `${email}`, // list of receivers
          subject: "Hello ✔", // Subject line
          text: "Hello world?", // plain text body
          html: "<b>Hello world?</b>", // html body
        });
} catch (error) {
    
}


module.exports= {
    guardarContacto
}