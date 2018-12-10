const STATISTYC = require ( '../../db/shemas/Statystycs' ).Statistyc;

const mongoose = require ( '../../db/connection' ).mongoose;

const StatistycCore = {

    addItem: async ( data ) => {

        const statistyc = new STATISTYC ( data );
        return statistyc.save ();

    },

    getAll: ( params ) => {

        return STATISTYC.aggregate ( [
            {
                $match: params,
            },

            {
                $unwind: {
                    path: '$statistyc',
                },
            },
            {
                $project: {
                    _id:     '$statistyc._id',
                    section: '$statistyc.section',
                },
            },
        ] );

    },

    initDatabase: async ( cabinet, statystyc ) => {

        const statistyc = new STATISTYC ( { cabinet: cabinet, statistyc: statystyc } );
        return statistyc.save ();

    },

    addNewSection: ( cabinet, section ) => {
        return STATISTYC.findOneAndUpdate ( {
            cabinet: cabinet,
        }, {
            '$push': {
                statistyc: { section: section },
            },
        }, {
            new: true,
        } );
    },

    aggregateStatistycData: ( cabinet ) => {
        return STATISTYC.aggregate ( [
            {
                $match: { cabinet: cabinet },
            },

            {
                $unwind: {
                    path: '$statistyc',
                },
            },
            {
                $project: {
                    _id:     '$statistyc._id',
                    section: '$statistyc.section',
                },
            },
        ] );
    },

    saveShema: ( shema ) => {
        return shema.save ();
    },

    increaseItem: ( cabinet, sectionId ) => {

        return STATISTYC.findOne (
            {
                cabinet:         cabinet,
                'statistyc._id': mongoose.Types.ObjectId ( sectionId ),
                //'statistyc.section.items._id': mongoose.Types.ObjectId ( itemId ),
                //'statistyc.section.name':'Профілактика'
            },
        ).exec ();

    },

    getStatystyc: ( cabinet, sectionId ) => {

        return STATISTYC.findOne (
            {
                cabinet:         cabinet,
                'statistyc._id': mongoose.Types.ObjectId ( sectionId ),
                //'statistyc.section.items._id': mongoose.Types.ObjectId ( itemId ),
                //'statistyc.section.name':'Профілактика'
            },
        ).exec ();
    },

    removeSection:( cabinet , sectionId )=>{
        return STATISTYC.update (
            {
                cabinet:         cabinet,
                //'statistyc._id': mongoose.Types.ObjectId ( sectionId ),

            },
            { $pull: { statistyc: { _id: mongoose.Types.ObjectId ( sectionId ) }} },
        ).exec ();
    }

};


module.exports = StatistycCore;