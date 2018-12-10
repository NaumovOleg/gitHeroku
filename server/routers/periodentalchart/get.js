const router = express.Router({mergeParams:true});
const ChartCore = require ('../../core/periodentalChart/periodental' );


router.get('/get/:patient', async ( req, res ) => {
    let patientData  =  req.params.patient;
    let user  = JSON.parse( req.session.passport.user );
    try {
        let chart = await ChartCore.getChart( patientData );
       return res.send( chart )
    } catch ( error ){
        res.status( 400 );
        return res.send( { error:error, message:'database error'})
    }
});

module.exports = router;