const mongoose = require ('mongoose')

const PaqueteSchema = new mongoose.Schema({
    paquete: String,
    precio: Number,
    cantidadEnvios: Number
})

module.exports = mongoose.model('Paquete', PaqueteSchema)