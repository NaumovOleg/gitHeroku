/**
 * Created by admin on 23.08.2018.
 */


const router = express.Router({mergeParams:true});

const PatientCore = require( '../../core/Patient' );

router.get('/getList', async ( req, res ) => {

    const user  = JSON.parse( req.session.passport.user );

    let code = user.cabinetCode;

    try{
        let patientList = await PatientCore.getPatiensInCabinet( code );
        if(!patientList ){
            throw new Error( 'database error' );
        }
        res.send( { patients:patientList } )

    } catch ( error ){
        res.status( 400 );
        res.send( {error:error, message:'database error' } )
    }

});


module.exports = router;