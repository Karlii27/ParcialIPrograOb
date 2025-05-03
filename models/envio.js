const mongoose = require ('mongoose')
const envioSchema = new mongoose.Schema({
    usuario: {type: mongoose.Schema.Types.ObjectId, ref: 'Usuario'},
    nombre: String,
    direccion: String,
    telefono: String,
    referencia: String,
    observacion: String,
    producto: {
        descripcion: String,
        peso: Number,
        bultos: Number,
        fecha_entrega: String
    },
    costoFinal: Number,
    estado: {type: String, default: 'activo'}
})

module.exports = mongoose.model('Envio', envioSchema)