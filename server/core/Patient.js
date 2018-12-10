

const PATIENT = require('../db/shemas/Patient' ).Patient;
const CABINET  = require('../db/shemas/Cabinet' ).Cabinet;
const mongoose = require('mongoose');

const CabinetCore = require('./Cabinet' );

const PatientCore = {

    getPatiensInCabinet : async ( code ) =>{
        let cabinet  = await CabinetCore.getCabinetByCode( code );
        let patients = PATIENT.aggregate([
            { $match : { cabinet : cabinet['_id'] }},{$sort:{ surname:1} }
        ]);
        return patients;
    },

    getPatientByCard : ( card )=>{
        return PATIENT.findOne({card:mongoose.Types.ObjectId( card )})
    },


    addPatient:( patient ) =>{
        let patientData  = new PATIENT( patient );
        return patientData.save()
    },

    findAndUpdatePatient: ( selector, params ) => {
        return PATIENT.findOneAndUpdate ( selector,
            { $set: params },
            { new: true }
        );
    },

    updatePatient: ( selector, value ) =>{
       return  PATIENT.update( selector, { $set: value }, { new: true }).exec();
    },

    deletePatients:(idList) =>{
        return PATIENT.find({
            '_id':{ $in: idList.map(id=>mongoose.Types.ObjectId(id))}
        }).remove()
    }

};


module.exports = PatientCore;