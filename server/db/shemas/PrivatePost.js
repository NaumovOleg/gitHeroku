const mongoose = require( '../connection.js' ).mongoose;

//

const PrivatePost = mongoose.Schema( {

    postDate: {
        type: Date, default: Date.now
    },

    header: {
        type: 'String',
        required: false,
    },

    message: {
        type: 'String',
        required: false,
    },

    images: {
        type: 'String',
        required: false,
    },
    readed:{
        type:'Boolean',
        default: false
    },

    cabinet: { type: mongoose.Schema.Types.ObjectId, ref: 'Cabinet' },
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    adressee: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },

} );

exports.PrivatePost = mongoose.model( 'Privatepost', PrivatePost );