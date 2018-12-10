/**
 * Created by OlegN on 18.08.2018.
 */


const passport = require('passport');
const AuthLocalStrategy = require('passport-local').Strategy;
const UserCore = require('../core/Core').user;
const crypto = require( '../db/crypto/crypto.js' );

module.exports =    function (app) {

    app.use(passport.initialize());
    app.use(passport.session());

    passport.use( 'local', new AuthLocalStrategy(

        async  (username, password, done ) => {
            let  response  = await UserCore.getUser( username );
            let user = response[0];

            if ( response.length<=0 ) {
                return done( null, false, {
                    message: response
                });
            }
            if ( user.hashedPassword ===crypto.encrypt( password, user.salt )) {
                return done(null, R.pick([
                        'name',
                        'surname',
                        'email',
                        'birthDate',
                        'secondname',
                        'phone',
                        '_id',
                        'image',
                        'gender',
                        'cabinet',
                        'color',
                        'cabinetCode',
                        'role'
                    ], user )

                );
            } else {
                return done(null, false, {message: 'Неправильний пароль'})
            }
        }

    ));

    passport.serializeUser(function (user, done) {

        done(null, JSON.stringify(user));

    });


    passport.deserializeUser(function (data, done) {

        try {
            done(null, JSON.parse(data));
        } catch (err) {
            done(err)
        }

    });

    return passport
};