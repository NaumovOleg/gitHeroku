

module.exports = ( server, io ) =>{

    const socketIo = io;
    const wall = socketIo
        //.of('/news')

        .on('connection', function (socket) {

            socket.on('joinRoom', function(room) {

                console.log( '------------', room)

                socket.join( ''+room  );

            });

        });

};
