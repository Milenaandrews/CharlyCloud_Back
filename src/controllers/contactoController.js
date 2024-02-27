
const guardarContacto = async(req, res)=>{
    try {
        const nuevoContacto = new Info(req.body)
        await nuevoContacto.save()
        res.json ({success: true, msg:"Contacto Guardado", info: nuevoContacto})
    } catch (error) {
        res.status(500).json({success: false, msg: error.message})
    }
}

module.exports= {
    guardarContacto
}