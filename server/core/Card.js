/**
 * Created by admin on 23.08.2018.
 */
const mongoose = require ( '../db/connection' ).mongoose;
const CARD = require ( '../db/shemas/Card' ).Card;

const Card = {

    addCard: ( card ) => {
        let cardData = new CARD ( card );
        return cardData.save ();
    },

    getCard: ( id ) => {
        return CARD.findById ( id );
    },

    getCardData: ( id ) => {
        return CARD.aggregate ( [
            {
                $match: { _id: mongoose.Types.ObjectId ( id ) },
            },
            {
                $lookup: {
                    from:         'patients',
                    localField:   'patient',
                    foreignField: '_id',
                    as:           'patient',
                },
            },
        ] );
    },

    addDesease: ( cabinetId, patientId, desease ) => {
        return CARD.findOneAndUpdate (
            {
                patient: mongoose.Types.ObjectId ( patientId ),
                cabinet: cabinetId,
            },
            {
                $push: {
                    deseases: desease,
                },
            },
        );

    },

    updateDesease: function ( card, deseases ) {
        return CARD.findOneAndUpdate ( { _id: card },
            {
                $set: {
                    deseases: deseases,
                },
            },

            { new: true },
        );

        //return  CARD.update( { _id: card, patient:patientId, 'deseases._id': desease._id },
        //    {
        //        $set: {
        //            'deseases.$.payed':desease.payed,
        //            'deseases.$.cost':desease.cost,
        //            'deseases.$.materials':desease.materials,
        //            'deseases.$.description':desease.description,
        //            'deseases.$.diagnosis':desease.diagnosis,
        //            'deseases.$.teeth':desease.teeth,
        //            'deseases.$.acceptanceTime':desease.acceptanceTime,
        //            'deseases.$.acceptanceDate':desease.acceptanceDate,
        //            'deseases.$.dateOfSet':desease.dateOfSet,
        //            'deseases.$.doctorid':desease.doctorid,
        //            'deseases.$.doctorsurname':desease.doctorsurname,
        //            'deseases.$.doctorname':desease.doctorname,
        //        }
        //    }
        //)
    },

    removeCards: ( cardsId ) => {
        return CARD.deleteMany ( {
            '_id': { $in: cardsId.map ( card => mongoose.Types.ObjectId ( card._id ) ) },
        } );
    },

    getCardIds: ( ids ) => {
        return CARD.aggregate ( [
            {
                $match: {
                    'patient': { $in: ids.map ( id => mongoose.Types.ObjectId ( id ) ) },
                },
            },
            {
                $project: {
                    '_id': '$_id',
                },

            },

        ] );

    },


    updateTeethCart: ( cardId, teeth ) => {

        return CARD.update ( {
                _id: cardId,
            },
            { $set: { teethCart: teeth } },
        );
    },

    updateImages: ( cardId, images ) => {

        return CARD.findOneAndUpdate ( {
                _id: cardId,
            },
            { $addToSet: { images } },
            { new: true },
        );
    },

    removeImages: ( cardId, images ) => {
        return CARD.findOneAndUpdate ( {
                _id: cardId,
            },
            { $pull: { images: { name: { $in: images } } } }, { new: true } );
    },


    updateTeethNotes: ( card, notes ) => {

        let set = {};

        Object.keys ( notes ).map ( el => {

            set[ 'teethCart.' + el + '.description' ] = notes[ el ];

        } );


        return CARD.findOneAndUpdate ( {
                _id: mongoose.Types.ObjectId ( card ),
            },
            {
                $set: set,

            },
        );
    },


    updateCalendarDeseases: ( desease ) => {

        return CARD.findOneAndUpdate (
            {
                patient:        mongoose.Types.ObjectId ( desease.patientId ),
                'deseases._id': mongoose.Types.ObjectId ( desease.deseaseId ),
            },
            {
                $set: {
                    'deseases.$.doctorid':         desease.doctorid,
                    'deseases.$.doctorsurname':    desease.doctorsurname,
                    'deseases.$.doctorname':       desease.doctorname,
                    'deseases.$.start_time':   desease.start_time,
                    'deseases.$.end_time':   desease.end_time,


                },
            },
        );

    },


};

module.exports = Card;
