const router = express.Router( { mergeParams: true } );

const PostsCore = require( '../../core/Posts' );
const UserCore  = require('../../core/User' )
const CabinetCore = require( '../../core/Cabinet' );

router.get( '/get-cabinet-news', async ( req, res ) => {

    let usersCreds   = JSON.parse( req.session.passport.user );
    let cabinetCreds = await CabinetCore.getCabinetByCode( usersCreds.cabinetCode );

    try {

        let posts = await PostsCore.getCabinetNews( cabinetCreds._id );



        return res.send( posts );

    } catch ( error ) {

        res.status( 400 );
        return res.send( error )

    }

} );

router.get( '/get-private', async ( req, res ) => {

    let usersCreds   =  JSON.parse( req.session.passport.user );

    let user = await UserCore.getUser(usersCreds.email );

    try {

        let posts = await PostsCore.getPrivateNews( user[0]._id );

        return res.send( posts );

    } catch ( error ) {

        console.log('wall', error );

        res.status( 400 );
        return res.send( error )

    }

} );


router.get( '/get-unchacked', async ( req, res ) => {

    let usersCreds   =  JSON.parse( req.session.passport.user );
    let user = await UserCore.getUser( usersCreds.email );
    let cabinetCreds = await CabinetCore.getCabinetByCode( usersCreds.cabinetCode );
    try {
        let unreaded = await PostsCore.getUnchackedMessages( cabinetCreds._id, user[0]._id );
        res.send( unreaded );

    } catch ( error ) {

        console.log( 'wall-get',error  );

        res.status( 400 );
        return res.send( error )

    }

} );

module.exports = router;