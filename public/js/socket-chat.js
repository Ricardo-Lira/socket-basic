
var socket = io();

var params = new URLSearchParams( window.location.search);
if (!params.has('nombre') || !params.has('sala')) {
    window.location ='index.html';
    throw new Error('El nombre y sala son necesarios');
}

var usuario = {
    nombre : params.get('nombre'),
    sala: params.get('sala')
};

socket.on('connect', function(){
    console.log('conectado al servidor');

    socket.emit('entrarChat', usuario, function(resp){
        console.log('Usuarios Conectados:', resp);
    });
});

socket.on('disconnect', function(){
    console.log('Perdimos conexion con el servidor');
})

//la funcion emit se usa para enviar inforamcion.
// socket.emit('crearMensaje',{
//     nombre: 'Ricardo',
//     mensaje: 'Hola Mundo'
// }, function ( resp ){
//     console.log('respuesta server:', resp);
// });

//Escuchar la informacion
socket.on('crearMensaje', function (mensaje){
    console.log('Servidor:', mensaje);
})

//Escuchar cambios de usuarios
//Cuando un usuario entra o sale del chat
socket.on('listaPersonas', function (personas){
    console.log(personas);
})

//Mensajes Privados

socket.on('mensajePrivado',function(mensaje){
    console.log('Mensaje Privado:', mensaje );
})


