const router = express.Router({mergeParams:true});
const PatientCore = require( '../../core/Patient' );
const CardCore = require( '../../core/Card' );
const CabinetCore = require('../../core/Cabinet' );
const UserCore = require ( '../../core/User' );

router.post('/update', async ( req, res ) => {

    let updatedCard  = req.body.updatedCard;
    let user  = JSON.parse( req.session.passport.user );

    patientData.cabinet = user.cabinet;

    try {

    } catch ( error ){

    }


});


router.post('/tooth-cart/update', async ( req, res ) => {
    let user  = JSON.parse( req.session.passport.user );
    let teeth = req.body.teeth;
    let cardId = req.body.cardId;

    try {

        let cabinet = await CabinetCore.getCabinetByCode( user.cabinetCode );
        let cabinetId = cabinet._id;

        let card = await CardCore.getCard( cardId );

        if( card.cabinet.toString() !== cabinetId.toString() ){

            throw new Error( 'no permission' );

        };

        let update = await CardCore.updateTeethCart( cardId, teeth );
        let updatedCard = await CardCore.getCard( cardId );

        let teethCart = updatedCard.teethCart;

        return res.send( teethCart )

    } catch ( error ){

        res.status( 400 );
        return res.send( error )

    }

});

router.post('/images/update', async ( req, res ) => {
    let user  = JSON.parse( req.session.passport.user );
    let images = req.body.images.filter(image => !!image);
    let cardId = req.body.cardId;

    try {

        let cabinet = await CabinetCore.getCabinetByCode( user.cabinetCode );
        let cabinetId = cabinet._id;

        let card = await CardCore.getCard( cardId );

        if( card.cabinet.toString() !== cabinetId.toString() ){

            throw new Error( 'no permission' );

        };

        const imageUpdate = await CardCore.updateImages( cardId, images );
        return res.send( imageUpdate.images );

    } catch ( error ){

        res.status( 400 );
        return res.send( error )

    }

});

router.post('/teeth-notes/edit', async ( req, res ) => {

    let card = req.body.card;
    let notes  = req.body.notes;

    try {

        let updatedCard = await CardCore.updateTeethNotes ( card, notes );
        let teethCart = await CardCore.getCard( card );

        res.send( teethCart.teethCart )

    } catch ( error ){
        res.status( 400 );
        res.send( {error:true, message:error })
    }
});

router.post('/images/remove', async ( req, res ) => {

    let user  = JSON.parse( req.session.passport.user );
    let images = req.body.images;
    let cardId = req.body.cardId;

    try {

        let cabinet = await CabinetCore.getCabinetByCode( user.cabinetCode );
        let cabinetId = cabinet._id;

        let card = await CardCore.getCard( cardId );

        if( card.cabinet.toString() !== cabinetId.toString() ){

            throw new Error( 'no permission' );

        };

        let imageUpdate = await CardCore.removeImages( cardId, images );
        return res.send( imageUpdate.images )

    } catch ( error ){

        res.status( 400 );
        return res.send( error )

    }

});


module.exports = router;