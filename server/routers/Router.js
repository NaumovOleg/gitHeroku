/**
 * Created by OlegN on 18.08.2018.
 */


const router   = express.Router( { mergeParams: true } );
const auth     = require( './auth/auth' );
const user     = require( './user/user' );
const cabinet  = require( './cabinet/cabinet' );
const patient  = require( './patient/patient' );
const card     = require( './card/card' );
const desease  = require( './deseases/deseases' );
const calendar = require( './calendar/calendar' );
const wall     = require( './wall/wall' );
const periodentalChart = require('./periodentalchart/chart');

const statistyc = require('./statistyc/statistyc' );




router.use( '/', auth );
router.use( '/', user );
router.use( '/', cabinet );
router.use( '/', patient );
router.use( '/', card );
router.use( '/', desease );
router.use( '/', calendar );
router.use( '/', wall );
router.use( '/', statistyc );
router.use( '/', periodentalChart );


module.exports = router;

