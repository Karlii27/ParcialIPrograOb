•	Método GET: muestra los envios disponibles del usuario

URL: http://localhost:3000/usuarios/id/envios_disponibles

•	Método GET por ID: muestra por medio del id del usuario los envíos realizados

URL: http://localhost:3000/envios/:id

•	Método POST: registra un nuevo envío y manda toda la información del paquete

URL: http://localhost:3000/envios

JSON:

{
"usuarioId": "68165f02298946b36a503734",
"nombre": "Noemí",
"direccion": "Calle 123",
"telefono": "555-1234",
"referencia": "Frente al parque",
"observacion": "Entregar antes del mediodía",
"producto": {
"descripcion": "Zapatos",
"peso": 2.5,
"bultos": 1,
"fecha_entrega": "2025-05-10"
}
}

•	Método DELETE o DESTROY: elimina un envío realizado por el usuario y reestablece el crédito

URL: http://localhost:3000/envios/:id

Le dejo los usuarios registrados para que pruebe con cualquiera :)

Usuarios registrados:


{
_id: ObjectId('68165f02298946b36a503732'),
nombre: 'Flavia',
apellido: 'Valencia',
telefono: '2245-6790',
enviosDisponibles: 30,
paquete: ObjectId('68165cec298946b36a50372f')
}


{
_id: ObjectId('68165f02298946b36a503733'),
nombre: 'Keyri',
apellido: 'Sánchez',
telefono: '3478-2456',
enviosDisponibles: 40,
paquete: ObjectId('68165cec298946b36a503730')
}


{
_id: ObjectId('68165f02298946b36a503734'),
nombre: 'Noemí',
apellido: 'Morales',
telefono: '5432-7658',
enviosDisponibles: 60,
paquete: ObjectId('68165cec298946b36a503731')
}
