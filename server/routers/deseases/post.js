/**
 * Created by admin on 29.08.2018.
 */

const router = express.Router ( { mergeParams: true } );
const UserCore = require ( '../../core/User' );
const CardCore = require ( '../../core/Card' );
const CabinetCore = require ( '../../core/Cabinet' );
const PatientCore = require ( '../../core/Patient' );
router.post ( '/add', async ( req, res ) => {
    let patientId = req.body.patientId;
    let desease = req.body.desease;
    let user = JSON.parse ( req.session.passport.user );
    let cabinetCode = user.cabinetCode;

    try {

        let cabinet = await CabinetCore.getCabinetByCode ( cabinetCode );
        let card = await CardCore.addDesease ( cabinet._id, patientId, desease );
        let cardResult = await CardCore.getCardData ( card._id );
        cardResult[ 0 ].patient = cardResult[ 0 ].patient[ 0 ];
        return res.send ( cardResult[ 0 ] );
    } catch ( error ) {
        res.status ( 400 );
        return res.send ( { error: error, message: 'database error' } );
    }

} );

router.post ( '/update', async ( req, res ) => {
    let deseases = req.body.deseases;
    let cardId = req.body.cardId;
    try {
        let updatedCard = await CardCore.updateDesease ( cardId, deseases );
        let patient =  await PatientCore.getPatientByCard( cardId );
        updatedCard.patient = patient;
        //updatedCard.patient =
        // let card = await  CardCore.getCardData ( cardId );
        return res.send ( updatedCard );
    } catch ( error ) {
        res.status ( 400 );
        return res.send ( { error: error, message: 'database error' } );
    }

} );




module.exports = router;
