/**
 * Created by admin on 22.08.2018.
 */


const router = express.Router ( { mergeParams: true } );
const UserCore = require ( '../../core/User' );
const CabinetCore = require ( '../../core/Cabinet' );
const AUTH_MIDDLEWARE = require( '../middelwares/AuthMiddleWare');

router.post ( '/add', async ( req, res, next ) => {

        let Cabinet = {
            name:         req.body.name,
            phone:        req.body.phone,
            address:      req.body.address,
            adminemail:   req.body.adminEmail,
            code:         Math.random (),
            creationDate: new Date (),
        };

        let User = {
            name:       req.body.adminName,
            surname:    req.body.adminSurname,
            secondname: req.body.adminSecondName,
            email:      req.body.adminEmail,
            phone:      req.body.adminPhone,
            password:   req.body.adminPassword,
            image:      '',

        };
        try {
            let cabinet = await CabinetCore.createCabinet ( Cabinet );
            if ( !cabinet ) {
                throw new Error ( 'database error' );
            }
            User.cabinet = cabinet._id;
            User.cabinetCode = cabinet.code;
            let user = await UserCore.addNewUser ( User );

            let updatedCabinet = await CabinetCore.updateCabinet (
                { _id: cabinet._id },
                {
                    $push: {
                        users: user._id
                    },
                },
            );

            if ( !user ) {
                throw new Error ( 'database error' );
            }

            req.body.username = User.email;
            req.body.password = User.password;

            return next ();
        } catch ( error ) {

            res.status ( 400 );
            return res.send ( { error: error, message: 'database error' } );
        }
    }, localPassport.authenticate ( 'local', {
        successRedirect: '/',
        failureRedirect: '/gets',
        failureFlash:    true,
    } ),
);

router.post ( '/update', 
                AUTH_MIDDLEWARE.chechAuth, 
                AUTH_MIDDLEWARE.cardAuth, 
                async ( req, res, next ) => {

            try {

                const data = req.body.data;
                const cabinetId = req.body.cabinetId;

                const updatedCabinet = await CabinetCore.updateAndGetCabinet (cabinetId, data);
                
                res.status(200);
                return res.send(updatedCabinet);
            } catch ( error ) {
    
                res.status ( 400 );
                return res.send ( { error: error, message: 'database error' } );
            }
});



module.exports = router;