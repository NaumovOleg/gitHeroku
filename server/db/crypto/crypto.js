/**
 * Created by OlegN on 18.08.2018.
 */
const crypto = require ( 'crypto' );

const Crypto = {
    encrypt: function ( password,salt ) {

        var check = password;

        return crypto.createHmac ( 'sha256', salt )
            .update ( check )
            .digest ( 'hex' );
    },
    encryptData: function(string, salt) {
        var cipher = crypto.createCipher('aes-256-cbc', salt)
        var crypted = cipher.update(string,'utf8','hex')
        crypted += cipher.final('hex');
        return crypted;
    },
    decryptData: function(string, salt){
        var decipher = crypto.createDecipher('aes-256-cbc', salt)
        var dec = decipher.update(string,'hex','utf8')
        dec += decipher.final('utf8');
        return dec;
      }

};

module.exports = Crypto;
