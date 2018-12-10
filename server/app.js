/**
 * Created by admin on 13.08.2018.
 */
global.R = require('ramda');
global.express = require( 'express' );
global.app = express();
global.config = JSON.parse( require('fs').readFileSync( './server/configuration/settings.json', 'utf8') );
const server = require('http').createServer(app);


const cors = require( 'cors' );
const fs = require( 'fs' );
const path = require( 'path' );
const flash = require('connect-flash');
const session = require('express-session');
const RedisStore = require('connect-redis')(session);
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');


app.use(cookieParser());
app.use(bodyParser());
app.use(flash());
app.use(session({ secret: 'SECRET' }));
app.use(session({
    store: new RedisStore(),
    secret: 'secret',
    resave: false,
    saveUninitialized: false
}));
console.log(path.join( __dirname + '/../build' ))

app.use(express.static(path.join( __dirname + '/../static' )));
app.use(express.static(path.join( __dirname + '/../assets' )));
app.use(express.static(path.join( __dirname + '/../build' )));

app.use(cors());

global.localPassport = require( './passport/auth')( app );
global.io = require( './routers/socket/socketIoInit')(server);

require('./Api').setRoutes( app , server, io );

app.set( 'config',config );
server.listen(app.get('config').port );

