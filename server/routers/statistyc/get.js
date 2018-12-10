const router = express.Router ( { mergeParams: true } );

const StatistycCore = require ( '../../core/statystycs/Statistyc' );

router.get ( '/get-all', async ( req, res ) => {

    let user = JSON.parse ( req.session.passport.user );

    try {

        let statistyc = await StatistycCore.getAll( {cabinet:user.cabinetCode});
        return res.send( statistyc )

    } catch ( error ) {
        console.log('stats get', error )
        res.status ( 400 );
        return res.send ( error );
    }

} );

module.exports = router;