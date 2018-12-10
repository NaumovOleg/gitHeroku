/**
 * Created by admin on 23.08.2018.
 */

const CabinetCore = require( '../../core/Cabinet');


const AuthMiddleWare = {
    chechAuth:(req, res, next ) =>{
        if(req.isAuthenticated()){
            return next();
        }
        res.status( 401 );
        return res.send( { error:'Unauthorised' } )

    },

    cardAuth: async ( req, res, next )=>{

        if(!req.isAuthenticated()){
            res.status( 401 );
            return res.send( {error:true, message:'unauthorised' });
        };
        let user  = JSON.parse( req.session.passport.user );
        cabinetCode = user.cabinetCode;
        try {
            const cabinet = await CabinetCore.getCabinetByCode( cabinetCode );
            if( !cabinet ){
                throw new Error( 'database error' );
            }
            req.cabinet = cabinet._id;
            next();
        } catch ( error ) {
            res.status( 400 );
            res.send( {error:error, nessage:'cabinet not found'})

        }
    }
};

module.exports = AuthMiddleWare;

