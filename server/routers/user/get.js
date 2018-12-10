const helper = require('../../helper');

const router = express.Router ( { mergeParams: true } );
const UserCore = require ( '../../core/User' );


router.get ( '/getList', async ( req, res ) => {

    let user = JSON.parse ( req.session.passport.user );
    let cabinetId = user.cabinetCode;
    try {
        let response = await  UserCore.getUsersInCabinet ( cabinetId );
        if ( !response ) {
            throw new Error ( unauthorised );
        }
        const users = helper.changeObjKeys(response[ 0 ].users, 'doctor');

        res.send ( { users } );
    } catch ( error ) {
        res.status ( 401 );
        return res.send ( { error: error, message: 'unauthorisedsss' } );
    }

} );


module.exports = router;