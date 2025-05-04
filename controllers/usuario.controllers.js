const mongoose = require('mongoose');
const Usuario = require('../models/user');
const Paquete = require('../models/paquete');

const obtenerEnviosDisponibles = async (req, res) => {
    try {
        const { id } = req.params;

        const usuario = await Usuario.findById(id).populate('paquete');

        if (!usuario) {
            return res.status(404).json({ mensaje: 'Usuario no encontrado' });
        }

        res.json({
            nombre: usuario.nombre,
            enviosDisponibles: usuario.enviosDisponibles,
            paquete: usuario.paquete
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ mensaje: 'Error al obtener crédito', error: error.message });
    }
};

module.exports = { obtenerEnviosDisponibles };
