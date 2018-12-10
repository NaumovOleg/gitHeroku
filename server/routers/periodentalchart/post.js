const router = express.Router({mergeParams:true});
const  PeriodentalCore = require('../../core/periodentalChart/periodental')


router.post('/update', async ( req, res ) => {

    let patientData  = req.body.patient;
    let user  = JSON.parse( req.session.passport.user );
    let data = req.body.data;
    try {

        const chart = await PeriodentalCore.updateChart( patientData, data );
        return res.send( chart )

    } catch ( error ){
        console.log( error );
        res.status( 400 );
        return res.send( { error:error, message:'database error'})
    }


});

module.exports = router