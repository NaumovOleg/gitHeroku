const mongoose = require ( '../connection.js' ).mongoose;


//

const PatientSchema = mongoose.Schema ( {
    name: {
        type: 'String',
        required: true,
    },
    surname: {
        type: 'String',
        required: false,
    },

    image:{
       name:{type:'String', default:''},
        url:{type:'String', default:''},
    },

    email: {
        type: 'String',
        required: false,
    },
    birthDate: {
        type: Date
    },
    secondname:{
        type: 'String',
        required: false,
    },
    phone:{
        type:'String'
    },
    address:{
        type:'String'

    },
    gender: {
        type: 'String'
    },
    cabinet:  { type: mongoose.Schema.Types.ObjectId, ref: 'Cabinet' },
    card: { type: mongoose.Schema.Types.ObjectId, ref: 'Card' },

});


exports.Patient = mongoose.model ( 'Patient', PatientSchema );