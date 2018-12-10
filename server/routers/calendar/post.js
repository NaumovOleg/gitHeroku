const router = express.Router( { mergeParams: true } );

const CardCore     = require( '../../core/Card' );
const UserCore     = require( '../../core/User' );
const CalendarCore = require( '../../core/Calendar' );

router.post( '/calendar-update-desease', async ( req, res ) => {

    let deseas = {
        deseaseId:      req.body.deseaseId,
        doctorid:       req.body.doctorid,
        doctorname:     req.body.doctorname,
        doctorsurname:  req.body.doctorsurname,
        end_time:       req.body.end_time,
        patientId:      req.body.patientId,
        start_time:     req.body.start_time
    };

    try {
        let doctor                     = await UserCore.getUserById( deseas.doctorid );
        let updated     = await CardCore.updateCalendarDeseases( deseas );
        let newDeseases = await CalendarCore.getAllDeseaseByCabinet( doctor.cabinetCode );
        res.send( newDeseases );
    } catch ( error ) {
        res.status( 400 );
        res.send( {
            error:   true,
            message: error
        } );
    }

} );

module.exports = router;
