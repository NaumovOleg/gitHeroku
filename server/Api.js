const path = require('path');
const ROOTROUTER  = require('./routers/Router' );

const SOCKET = require('./routers/socket/index' );


function setRoutes( app, server , io ) {


    SOCKET( server, io )
    app.use('/', ROOTROUTER );
    app.get('/',function (req,res) {
        res.sendFile('index.html', { root: path.join(__dirname, '/../build') })
        // res.send( req.body )
    });



}

exports.setRoutes = setRoutes;