const router = express.Router( { mergeParams: true } );

const PatientCore = require( '../../core/Patient' );
const CardCore    = require( '../../core/Card' );
const CabinetCore = require( '../../core/Cabinet' );
let CalendarCore  = require( '../../core/Calendar' );

router.get( '/get-shedule', async ( req, res ) => {

    let user = JSON.parse( req.session.passport.user );
    try {
        let calendar = await CalendarCore.getAllDeseaseByCabinet( user.cabinetCode );
        return res.send( calendar )
    } catch ( error ) {
        res.status( 400 );
        res.send( {
            error:   true,
            message: error
        } )
    }

} );

module.exports = router;