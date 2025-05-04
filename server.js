const express = require('express')
const mongoose= require('mongoose')
const app = express()
app.use(express.json())
require('dotenv').config()

const usuarioRoutes= require('./routes/usuarios.routes')
app.use('/usuarios', usuarioRoutes)

const envioRoutes = require('./routes/envios.routes')
app.use('/envios', envioRoutes)

const eliminarRoutes = require('./routes/envios.routes')
app.use('/envios', eliminarRoutes)

mongoose.connect(process.env.MONGODB_URI)
    .then(()=>{
        console.log("Conectado a MongoDB")
        app.listen(process.env.PORT, ()=>{
            console.log("Servidor corriendoo")
        })
    })
    .catch(err => console.error('Error de conexion: ', err))
