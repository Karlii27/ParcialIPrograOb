const express = require('express')
const router = express.Router()
const { obtenerEnviosDisponibles} = require('../controllers/usuario.controllers')

router.get('/:id/envios_disponibles', obtenerEnviosDisponibles);

module.exports = router