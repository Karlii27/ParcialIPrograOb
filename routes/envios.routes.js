const express = require ('express')
const router = express.Router()
const { registrarEnvio, obtenerEnviosUsuario, eliminarEnvio } = require ('../controllers/envios.controllers')

router.post('/', registrarEnvio)
router.get('/:id', obtenerEnviosUsuario)
router.delete('/:id', eliminarEnvio)

module.exports = router