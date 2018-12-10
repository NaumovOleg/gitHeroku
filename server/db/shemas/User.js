/**
 * author Oleg .
 */

const mongoose = require ( '../connection.js' ).mongoose;


const async = require ( 'async' );
const crypt = require ( '../crypto/crypto' );

//

const UserSchema = mongoose.Schema ( {
    name: {
        type: 'String',
        required: true,
    },
    surname: {
        type: 'String',
        required: false,
    },
    email: {
        type: 'String',
        required: true,
    },
    salt: {
        required: true,
        type: String
    },
    birthDate: {
        type: Date
    },
    hashedPassword: {
        type: String,
        required: true
    },
    secondname:{
        type: 'String',
        required: false,
    },
    phone:{
        type:'String'
    },
    image:{
        name: { type: 'String', default: '' },
        url: { type: 'String', default: '' }
    },
    role:{
        type: 'Number',
        // 1 - USER
        // 2 - ADMIN
        // 3 - SUPERADMIN 
        enum: [1, 2, 3],
        default: 1
    },
    gender:{
        type:'String'
    },
    cabinetCode:{
        type:'String'
    },
    color:{
        type:'String',
        default:function (  ) {
            return '#'+'0123456789abcdef'.split('').map(function(v,i,a){
                    return i>5 ? null : a[Math.floor(Math.random()*16)] }).join('');
        }
    },
    cabinet: [ { type: mongoose.Schema.Types.ObjectId, ref: 'Cabinet' }],

});

UserSchema.virtual ( 'password' )
    .set ( function ( password ) {
        this._plainPasword = password;
        this.salt = Math.random () + '';
        this.hashedPassword = crypt.encrypt ( password, this.salt );
    })
    .get ( function () {
        return this._plainPasword
    });
UserSchema.methods.encryptPasword = function ( password ) {
    return crypt.encrypt ( password, this.salt );
};

exports.User = mongoose.model ( 'User', UserSchema );
