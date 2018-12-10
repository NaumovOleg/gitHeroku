const mongoose = require ( '../db/connection' ).mongoose;
const _ = require ( 'underscore' );
const NEWS = require ( '../db/shemas/News' ).News;
const PRIVATEPOST = require ( '../db/shemas/PrivatePost' ).PrivatePost;


const Posts = {

    addCabinetNews: ( post ) => {

        let postSave = new NEWS ( post );
        return postSave.save ();

    },

    addPrivatePost: ( post ) => {

        let postSave = new PRIVATEPOST ( post );
        return postSave.save ();

    },


    getCabinetNews: ( cabinetId ) => {

        return NEWS.aggregate ( [
            {
                $match: {
                    cabinet: cabinetId,
                },

            },
            {
                $sort: {
                    postDate: 1,
                },
            },
        ] );

    },

    getPrivateNews: ( userId ) => {

        return PRIVATEPOST.aggregate ( [
            {
                $match: {
                    $or: [
                        {
                            adressee: userId,
                        },
                        {
                            author: userId,
                        } ],
                },

            },
            {
                $sort: {
                    postDate: 1,
                },
            },
        ] );

    },

    removePrivateNews: ( id ) => {

        return PRIVATEPOST.findOneAndRemove ( { _id: id } ).exec ();

    },

    readNews: async ( cabinetId, userId, authorId ) => {
        let news = await NEWS.updateMany (
            { cabinet: cabinetId, author: { '$ne': userId } },
            { $push: { readedBy: { 'user': userId } } } );
        let private;
        if ( authorId != '' ) {
            private = await PRIVATEPOST.updateMany ( {
                cabinet:  cabinetId,
                adressee: userId,
                author:   authorId,
            }, { $set: { readed: true } } );
        }
        else {
            private = await PRIVATEPOST.aggregate ( [
                {
                    $match: {
                        cabinet: cabinetId,
                        $or:     [
                            {
                                adressee: userId,
                                author:   authorId,
                            },
                        ],
                    },
                } ],
            );
        }
        return {
            news:    news,
            private: private,
        };

    },

    getExact: ( cabinet, me, chater ) => {
        return PRIVATEPOST.aggregate ( [
            {
                $match: {
                    //cabinet: mongoose.Types.ObjectId ( cabinet ),
                    $and:    [
                        {
                            $or: [
                                {
                                    adressee: mongoose.Types.ObjectId ( me ),
                                },
                                {
                                    adressee:mongoose.Types.ObjectId ( chater ),
                                }
                            ],
                        },
                        {
                            $or: [
                                {
                                    author: mongoose.Types.ObjectId ( me ),
                                },
                                {
                                    author:mongoose.Types.ObjectId ( chater ),
                                }
                            ],
                        }
                    ],
                },
            },
        ] );
    },


    getUnchackedMessages: async ( cabinetId, userId ) => {

        let data = {
            private: [],
            news:    0,
        };

        let news = await NEWS.aggregate ( [
            {
                $match: {
                    cabinet:         mongoose.Types.ObjectId ( cabinetId ),
                    author:          { '$nin': [ userId ] },
                    'readedBy.user': { '$nin': [ mongoose.Types.ObjectId ( userId ) ] },
                },
            },
            {
                $count: 'news',
            },

        ] );

        let private = await PRIVATEPOST.aggregate ( [
            {
                $match: {
                    adressee: mongoose.Types.ObjectId ( userId ),
                    readed:   false,
                },

            },
            {
                $group: { _id: '$author', count: { $sum: 1 } },
            },

        ] );

        if ( private.length > 0 ) {
            data.private = private;
        }
        if ( news.length > 0 ) {
            data.news = news[ 0 ].news;
        }

        return data;
    },

};

module.exports = Posts;