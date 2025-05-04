const mongoose = require('mongoose')
 
const UsuarioSchema = new mongoose.Schema({
    nombre: String,
    apellido: String,
    telefono: String,
    enviosDisponibles: Number,
    paquete: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Paquete'
    }
})


module.exports= mongoose.model('Usuario', UsuarioSchema)