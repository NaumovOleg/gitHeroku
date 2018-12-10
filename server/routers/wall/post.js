const router = express.Router ( { mergeParams: true } );
const PostsCore = require ( '../../core/Posts' );
const UserCore = require ( '../../core/User' );
const CabinetCore = require ( '../../core/Cabinet' );

router.post ( '/post-news', async ( req, res ) => {

    let news = req.body.news;

    try {

        let usersCreds = JSON.parse ( req.session.passport.user );

        let user = await UserCore.getUser ( usersCreds.email );

        let cabinetCreds = await CabinetCore.getCabinetByCode ( usersCreds.cabinetCode );

        news.author = user[ 0 ]._id;
        news.cabinet = cabinetCreds._id;

        let added = await PostsCore.addCabinetNews ( news );

        io.sockets.in ( '' + usersCreds.cabinetCode ).emit ( 'news-added', {
            room: '' + usersCreds.cabinetCode,
            news: added,
        } );

        return res.send ( added );

    } catch ( error ) {

        return res.send ( error );
    }

} );

router.post ( '/post-private', async ( req, res ) => {

    let note = req.body.note;
    try {

        let usersCreds = JSON.parse ( req.session.passport.user );

        let user = await UserCore.getUser ( usersCreds.email );

        let cabinetCreds = await CabinetCore.getCabinetByCode ( usersCreds.cabinetCode );

        note.author = user[ 0 ]._id;
        note.cabinet = cabinetCreds._id;

        let added = await PostsCore.addPrivatePost ( note );

        io.sockets.in ( '' + usersCreds.cabinetCode ).emit ( 'private-post-changes', {
            room: '' + usersCreds.cabinetCode,
            note: added,
        } );

        return res.send ( added );

    } catch ( error ) {

        return res.send ( error );
    }

} );

router.post ( '/remove-private', async ( req, res ) => {

    let id = req.body.id;
    let usersCreds = JSON.parse ( req.session.passport.user );

    try {

        let removed = await PostsCore.removePrivateNews ( id );

        io.sockets.in ( '' + usersCreds.cabinetCode ).emit ( 'private-post-changes',{removed:removed} );

        return res.send ( id );

    } catch ( error ) {

        return res.send ( error );
    }

} );

router.post( '/read-all', async ( req, res ) => {

    let usersCreds   =  JSON.parse( req.session.passport.user );
    let user = await UserCore.getUser( usersCreds.email );
    let cabinetCreds = await CabinetCore.getCabinetByCode( usersCreds.cabinetCode );
    let authorId = req.body.author;
    try {
        let read =  await PostsCore.readNews(cabinetCreds._id, user[0]._id,authorId);
        let unreaded = await PostsCore.getUnchackedMessages( cabinetCreds._id, user[0]._id );
        res.send( unreaded );

    } catch ( error ) {

        console.log( 'read-all', error  );

        res.status( 400 );
        return res.send( error )

    }

} );

router.post( '/get-exact', async ( req, res ) => {
    let usersCreds   =  JSON.parse( req.session.passport.user );
    let cabinet  =usersCreds.cabinet[0];
    let chater = req.body.chater;

    try{
        let messages = await  PostsCore.getExact( cabinet, usersCreds._id, chater );
        return res.send( messages )
    } catch ( error ){
        res.status( 400 );
        return res.send( error )
    }




})

module.exports = router;