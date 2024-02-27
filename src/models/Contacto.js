const mongoose = require('mongoose')

const formSchema = new mongoose.Schema(
    {
        nombre: {
            type: String,
            required: true,
            lowercase: true,
            minLength: 3,
            maxLength: 100,
            trim: true
        },

        email: {
            type: String,
            required: true,
        },


    }, {timestamps:true});

    const Contacto = mongoose.model("contacto", productSchema)

    module.exports = Contacto;