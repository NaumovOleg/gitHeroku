/**
 * Created by OlegN on 28.09.2018.
 */
const mongoose = require( '../connection.js' ).mongoose;
const _ = require('underscore');
//

const News = mongoose.Schema( {

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

    readedBy:[{user:{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }}],

    cabinet: { required: true, type: mongoose.Schema.Types.ObjectId, ref: 'Cabinet' },
    author: { required: true, type: mongoose.Schema.Types.ObjectId, ref: 'User' },


} );

exports.News = mongoose.model( 'News', News );