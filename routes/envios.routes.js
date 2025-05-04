const express = require ('express')
const router = express.Router()
const { registrarEnvio, obtenerEnviosUsuario, eliminarEnvio } = require ('../controllers/envios.controllers')

router.post('/', registrarEnvio)
router.get('/envios/:id', obtenerEnviosUsuario)
router.delete('/envios/:id', eliminarEnvio)

module.exports = router