/**
 * Created by admin on 27.08.2018.
 */

const router = express.Router({mergeParams:true});

const PatientCore = require( '../../core/Patient' );
const CardCore = require( '../../core/Card' );


router.get('/get/:cardId', async ( req, res ) => {

    const cardSearchId = req.params.cardId;
    try{
        let cardResult = await CardCore.getCardData( cardSearchId );
        let card = R.pick(['_id','notes','deseases','cabinet','teethCart', 'images'],cardResult[0]);
        card.patient = cardResult[0].patient[0];
        if( card.cabinet+'' !== req.cabinet+'' ) {
            throw new Error( 'unauthorised' )
        } ;

        res.send( {card:card } )
    } catch ( error ){

        res.status( 401 );
        return res.send({
            error:error,
            message:'unauthorised'
        })
    }

});



module.exports = router;
