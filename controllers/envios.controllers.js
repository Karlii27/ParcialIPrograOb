const Envio = require('../models/envio')
const User = require('../models/user')

const registrarEnvio = async (req, res) => {
    try {
        const { usuarioId, nombre, direccion, telefono, referencia, observacion, producto } = req.body

        const usuario = await User.findById(usuarioId)
        if (!usuario) return res.status(404).json({ mensaje: 'Usuario no encontrado' })
        if (usuario.enviosDisponibles <= 0) return res.status(400).json({ mensaje: 'Sin envíos disponibles' })

        let costo = 1
        if (producto.peso > 3) {
            costo = Math.ceil(producto.peso / 3)
        }

        const nuevoEnvio = new Envio({
            usuario: usuario._id,
            nombre,
            direccion,
            telefono,
            referencia,
            observacion,
            producto,
            costoFinal: costo,
            estado: 'activo'
        })

        await nuevoEnvio.save()
        usuario.enviosDisponibles -= 1
        await usuario.save()

        res.json(nuevoEnvio)
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al registrar envío', error })
    }
}

const obtenerEnviosUsuario = async (req, res) => {
    try {
        const { id } = req.params
        const envios = await Envio.find({ usuario: id, estado: 'activo' })
        res.json(envios)
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al obtener envíos', error })
    }
}

const eliminarEnvio = async (req, res) => {
    try {
        const { id } = req.params
        const envio = await Envio.findById(id)
        if (!envio || envio.estado !== 'activo') return res.status(404).json({ mensaje: 'Envío no encontrado' })

        envio.estado = 'eliminado'
        await envio.save()

        const usuario = await User.findById(envio.usuario)
        usuario.enviosDisponibles += 1
        await usuario.save()

        res.json({ mensaje: 'Envío eliminado y crédito restaurado' })
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al eliminar envío', error })
    }
}

module.exports = {
    registrarEnvio,
    obtenerEnviosUsuario,
    eliminarEnvio
}
