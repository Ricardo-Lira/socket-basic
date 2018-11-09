
        var socket = io();
        socket.on('connect', function(){
            console.log('conectado al servidor');
        })

        socket.on('disconnect', function(){
            console.log('Perdimos conexion con el servidor');
        })

        //la funcion emit se usa para enviar inforamcion.
        socket.emit('enviarMensaje',{
            usuario: 'Ricardo',
            mensaje: 'Hola Mundo'
        }, function ( resp ){
            console.log('respuesta server:', resp);
        });

        //Escuchar la informacion
        socket.on('enviarMensaje', function (mensaje){
            console.log('Servidor:', mensaje);
        })
    
