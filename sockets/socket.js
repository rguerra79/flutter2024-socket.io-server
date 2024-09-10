const { io } = require('../index');

// Mensajes de SOckets

io.on('connection', (client) => {
  console.log('Cliente conectado');

  client.on('disconnect', () => {
    console.log('Cliente desconectado');
  });

  // escuchar mensajes de clientes
  client.on('mensaje', (payload) => {
    console.log('Mensaje', payload);

    io.emit('nuevo-mensaje', { admin: 'Nuevo mensaje' });
  });
});
