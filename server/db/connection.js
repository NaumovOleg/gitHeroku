/**
 * author Oleg .
 */

const mongoose = require ( 'mongoose' );


mongoose.connect( config.mongoose.uri );

const connection = mongoose.connection;


connection.on( 'error', console.error.bind ( console, 'connection error' ) );
connection.once( 'open', function ( callback ) {
    console.log( 'Successfull connection to dental-box database. Connection url : '+config.mongoose.uri );
});

//

module.exports = {
    mongoose: mongoose,
    connection: connection,

};