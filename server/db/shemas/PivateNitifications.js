const mongoose = require( '../connection.js' ).mongoose;

//

const PrivateNotifications = mongoose.Schema( {

    postDate: {
        type: Date, default: Date.now
    },

    message: {
        type: 'String',
        required: false,
    },

    cabinet: { type: mongoose.Schema.Types.ObjectId, ref: 'Cabinet' },
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    adressee: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },

} );

exports.PrivatePost = mongoose.model( 'PrivateNotifications', PrivateNotifications );