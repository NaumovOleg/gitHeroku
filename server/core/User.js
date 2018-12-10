/**
 * Created by OlegN on 18.08.2018.
 */
const USER     = require( '../db/shemas/User' ).User;
const CABINET  = require( '../db/shemas/Cabinet' ).Cabinet;
const mongoose = require( '../db/connection' ).mongoose;

const User = {
    addNewUser: ( user ) => {
        var user = new USER( user );
        return user.save();
    },

    update: ( id, params ) => {

        return USER.findOneAndUpdate ( {
                _id: id,
            },
            { $set: params },
            { new: true }
        );
    },

    getUser: ( login ) => {

        return USER.aggregate( [
            {
                $match: {
                    $or: [
                        { $and: [ { email: { $ne: null } }, { email: login } ] },

                        { $and: [ { surname: { $ne: null } }, { surname: login } ] },
                        { $and: [ { phone: { $ne: null } }, { phone: login } ] },
                        { $and: [ { _id: { $ne: null } }, { _id:mongoose.Schema.Types.ObjectId ( login )  } ] },
                    ],
                },
            },
        ] );
    },

    getUserById: ( id ) => {
        return USER.findById(id);
    },

    getUserWithCabinet: ( login ) => {
        return USER.aggregate( [
            {
                $match: {
                    $or: [
                        { $and: [ { email: { $ne: null } }, { email: login } ] },
                        { $and: [ { _id: { $ne: null } }, { _id: login } ] },
                        { $and: [ { surname: { $ne: null } }, { surname: login } ] },
                        { $and: [ { phone: { $ne: null } }, { phone: login } ] },
                    ],
                },
            },
            {
                $lookup: {
                    from: 'cabinets',
                    localField: 'cabinetCode',
                    foreignField: 'code',
                    as: 'cabinet',
                },
            },

        ] );
    },

    getUsersInCabinet: ( id ) => {
        return CABINET.aggregate( [
            {
                $match: {
                    $or: [
                        { $and: [ { code: { $ne: null } }, { code: id } ] },
                        { $and: [ { _id: { $ne: null } }, { _id: id } ] },
                    ],
                },
            },
            {
                $lookup: {
                    from: 'users',
                    localField: 'users',
                    foreignField: '_id',
                    as: 'users',
                },
            },
            {
                $project: {
                    _id: 0,
                    users: {
                        _id: 1,
                        name: 1,
                        surname: 1,
                        email: 1,
                        secondname: 1,
                        image:1,
                        role:1,
                        gender:1
                    },

                },
            },
        ] );
    },

    removeUserInCabinet( userId ){
        return USER.deleteOne( { _id: userId } )
    }

};

module.exports = User;