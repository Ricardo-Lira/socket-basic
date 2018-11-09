const {io} = require('../server');

io.on('connection',(client) =>{
    console.log('Usuario conectado');

    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        mensaje: 'Bienvenido a esta aplicacion'
    })

    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });

    //Escuchar el cliente
    client.on('enviarMensaje', (data, callback) =>{
        console.log(data);
        
        //Broadcast funciona para elviar la inforamcion a todo usuario que este conectado en el servidor
        client.broadcast.emit('enviarMensaje', data);

        // if (mensaje.usuario) {
        //     callback({
        //         respuesta:'TODO SALIO BIEN '
        //     })
        // }else{
        //     callback({
        //         respuesta: 'TODO SALIO MAL!!!!'
        //     })
        // }  

    })
});


