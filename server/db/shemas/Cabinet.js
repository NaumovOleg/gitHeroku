/**
 * author Oleg .
 */
const mongoose = require ( '../connection.js' ).mongoose;

//

const CabinetSchema = mongoose.Schema ( {
    name: {
        type: 'String',
        required: true,
    },
    adminemail: {
        type: 'String',
        required: false,
    },
    phone: {
        type: 'String',
        required: true,
    },
    address: {
        required: true,
        type: String
    },
    logo:{
        type:'String'
    },
    code: {
        type: 'String'
    },
    creationDate:{
        type:Date

    },
    users: [ { type: mongoose.Schema.Types.ObjectId, ref: 'User' }],

});

exports.Cabinet = mongoose.model ( 'Cabinet', CabinetSchema );
