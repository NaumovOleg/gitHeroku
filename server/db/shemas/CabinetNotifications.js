const mongoose = require( '../connection.js' ).mongoose;

//

const CabinetNotifications = mongoose.Schema( {

    postDate: {
        type: Date, default: Date.now
    },

    message: {
        type: 'String',
        required: false,
    },

    cabinet: { type: mongoose.Schema.Types.ObjectId, ref: 'Cabinet' },
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },

} );

exports.PrivatePost = mongoose.model( 'CabinetNotifications', CabinetNotifications );