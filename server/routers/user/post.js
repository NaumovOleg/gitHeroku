/**
 * Created by OlegN on 18.08.2018.
 */
const router = express.Router ( { mergeParams: true } );
const UserCore = require ( '../../core/User' );
const CabinetCore = require ( '../../core/Cabinet' );
const mongoose = require ( '../../db/connection' ).mongoose;
const helper = require('../../helper')
const permissionMiddleWare = require('../middelwares/permissionsMiddleWare');

router.post ( '/add', async ( req, res ) => {

    let user = req.body.user;
    let cabinetCode = req.body.cabinetCode;
    user.cabinetCode = req.body.cabinetCode;

   try {



        let cabinet = await CabinetCore.getCabinetByCode ( cabinetCode );

        user.cabinet = [ cabinet._id ];

        let response = await  UserCore.addNewUser ( user );

        let updatedCabinet = await CabinetCore.addUserToCabinet ( response._id, cabinet._id );


        if ( !response ) {


            throw new Error ( 'unauthorised' );

        }

        let userList = await  UserCore.getUsersInCabinet ( cabinet._id );
        if ( !response ) {
            throw new Error ( unauthorised );
        }

        const users = helper.changeObjKeys( userList[ 0 ].users, 'doctor');
        res.send ( { users } );

    } catch ( error ) {

       console.log('user post', error )
        res.status ( 401 );
        return res.send ( { error: error, message: 'unauthorised' } );
    }

} );

router.post ( '/update', permissionMiddleWare.isUserHasRightsUpdateOtherUser, async ( req, res ) => {
    
        try {

            const data = req.body;
            const { user_id } = req.query;
            const updatedUser = await UserCore.update(user_id, data);
            if (`${updatedUser._id}` === `${req.session.passport.user._id}`) {
                req.session.passport.user = JSON.stringify(updatedUser);
            }
            return res.send (updatedUser);
    
        } catch ( error ) {

            res.status ( 401 );
            return res.send ( { error: error, message: 'unauthorised' } );
        }
    
    } );

router.post ( '/remove', async ( req, res ) => {

    let userId = req.body.userId;
    let cabinetCode = req.body.cabinetCode;
    try {

        let deleteduser = await UserCore.removeUserInCabinet( userId );
        let updatedCabinet  = await CabinetCore.removeUserFromCabinet( cabinetCode, userId );

        return res.send( updatedCabinet )

    } catch ( error ) {
        res.status ( 400 );
        return res.send ( { message: 'database error', error: error } );
    }


} );


module.exports = router;