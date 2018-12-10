/**
 * Created by admin on 22.08.2018.
 */
const CABINET = require( '../db/shemas/Cabinet' ).Cabinet;
const USER    = require( '../db/shemas/User' ).User;
const CARD    = require( '../db/shemas/Card' ).Card;

const Calendar = {

    getAllDeseaseByCabinet: ( code ) => {

        return CABINET.aggregate( [

            {
                $match: {
                    code: code,
                },
            },
            {
                $project: {
                    _id: 1,
                },
            },
            {
                $lookup: {
                    from:         'cards',
                    localField:   '_id',
                    foreignField: 'cabinet',
                    as:           'card',
                },

            },
            {
                $unwind: {
                    path: '$card',
                },
            },
            {
                $unwind: {
                    path: '$card.deseases',
                },
            },
            {
                $project: {
                    _id:              '$card.deseases._id',
                    doctorid:         '$card.deseases.doctorid',
                    doctorname:       '$card.deseases.doctorname',
                    doctorsurname:    '$card.deseases.doctorsurname',
                    time:             '$card.deseases.acceptanceTime',
                    hoursPerCuration: '$card.deseases.hoursPerCuration',
                    patientId:        '$card.patient',
                    patientName:      '$card.patientname',
                    patientSurname:   '$card.patientsurname',
                    acceptanceDate:   '$card.deseases.acceptanceDate',
                    start_time:       '$card.deseases.start_time',
                    end_time:         '$card.deseases.end_time',

                },
            },

        ] );

    },

};

module.exports = Calendar;