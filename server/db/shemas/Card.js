const mongoose = require ( '../connection.js' ).mongoose;


//

const CardSchema = mongoose.Schema ( {
    patientname:    {
        type:     'String',
        required: true,
    },
    patientsurname: {
        type:     'String',
        required: false,
    },
    notes:          {
        type: 'String',
    },
    images: [
        {
            name: { type: 'String'},
            url: { type: 'String' },
            teeth: [Number]
        }
    ],
    deseases:       [
        {
            doctorname:    {
                type: 'String',
            },
            start_time:{type:'Date'},
            end_time:{type:'Date'},
            doctorsurname: {
                type: 'String',
            },
            doctorid:      {
                type: 'String',
            },
            code:          Number,

            dateOfSet:        {
                type: 'String',
            },
            hoursPerCuration: {
                type: 'String',
            },
            teeth:            {
                type: 'String',
            },
            diagnosis:        {
                type: 'String',
            },
            description:      {
                type: 'String',
            },
            materials:        {
                type: 'String',
            },
            cost:             {
                type: 'String',
            },
            payed:            {
                type: 'String',
            },
        },
    ],
    patient:        { type: mongoose.Schema.Types.ObjectId, ref: 'Patient' },
    cabinet:        { type: mongoose.Schema.Types.ObjectId, ref: 'Cabinet' },

    teethCart: {
        '28': {
            zone:{ '1':{ type: 'String',default:'none'},'2':{ type: 'String',default:'none'},'3':{ type: 'String',default:'none'},'4':{ type: 'String',default:'none'},'5':{ type: 'String',default:'none'}},
            removed: { type: mongoose.Schema.Types.Boolean, default: false, required: false, },
            implant: { type: mongoose.Schema.Types.Boolean, required: false,default: false },
            crown:{ type: mongoose.Schema.Types.Boolean, required: false,default: false },
            description:{type:'String',default:''},
            '28-1': {color: { type: 'String',default:'none'}},
            '28-2': {color: { type: 'String',default:'none'}},
            '28-3': {color: { type: 'String',default:'none'}},
            '28-4': {color: { type: 'String',default:'none'}},
        },
        '27': {
            description:{type:'String',default:''},
            zone:{ '1':{ type: 'String',default:'none'},'2':{ type: 'String',default:'none'},'3':{ type: 'String',default:'none'},'4':{ type: 'String',default:'none'},'5':{ type: 'String',default:'none'}},
            removed: { type: mongoose.Schema.Types.Boolean, default: false, required: false, },
            implant: { type: mongoose.Schema.Types.Boolean, required: false,default: false },
            crown:{ type: mongoose.Schema.Types.Boolean, required: false,default: false },
            '27-1': {color:{ type: 'String',default:'none' }},
            '27-2': {color:{ type: 'String',default:'none' }},
            '27-3': {color:{ type: 'String',default:'none' }},
            '27-4': {color:{ type: 'String',default:'none' }},
        },
        '26': {
            description:{type:'String',default:''},
            zone:{ '1':{ type: 'String',default:'none'},'2':{ type: 'String',default:'none'},'3':{ type: 'String',default:'none'},'4':{ type: 'String',default:'none'},'5':{ type: 'String',default:'none'}},
            crown:{ type: mongoose.Schema.Types.Boolean, required: false,default: false },
            removed: { type: mongoose.Schema.Types.Boolean, default: false, required: false, },
            implant: { type: mongoose.Schema.Types.Boolean, required: false,default: false },
            '26-1':  {color:{ type: 'String',default:'none' }},
            '26-2':  {color:{ type: 'String',default:'none' }},
            '26-3':  {color:{ type: 'String',default:'none' }},
            '26-4':  {color:{ type: 'String',default:'none' }},
        },


        '18': {
            description:{type:'String',default:''},
            zone:{ '1':{ type: 'String',default:'none'},'2':{ type: 'String',default:'none'},'3':{ type: 'String',default:'none'},'4':{ type: 'String',default:'none'},'5':{ type: 'String',default:'none'}},
            crown:{ type: mongoose.Schema.Types.Boolean, required: false,default: false },
            removed: { type: mongoose.Schema.Types.Boolean, default: false, required: false, },
            implant: { type: mongoose.Schema.Types.Boolean, required: false,default: false },
            '18-1':  {color:{ type: 'String',default:'none'}},
            '18-2':  {color:{ type: 'String',default:'none'}},
            '18-3':  {color:{ type: 'String',default:'none'}},
            '18-4':  {color:{ type: 'String',default:'none'}},
        },
        '17': {
            description:{type:'String',default:''},
            zone:{ '1':{ type: 'String',default:'none'},'2':{ type: 'String',default:'none'},'3':{ type: 'String',default:'none'},'4':{ type: 'String',default:'none'},'5':{ type: 'String',default:'none'}},
            crown:{ type: mongoose.Schema.Types.Boolean, required: false,default: false },
            removed: { type: mongoose.Schema.Types.Boolean, default: false, required: false, },
            implant: { type: mongoose.Schema.Types.Boolean, required: false,default: false },
            '17-1':  {color:{ type: 'String',default:'none' }},
            '17-2':  {color:{ type: 'String',default:'none' }},
            '17-3':  {color:{ type: 'String',default:'none' }},
            '17-4':  {color:{ type: 'String',default:'none' }},
        },
        '16': {
            description:{type:'String',default:''},
            zone:{ '1':{ type: 'String',default:'none'},'2':{ type: 'String',default:'none'},'3':{ type: 'String',default:'none'},'4':{ type: 'String',default:'none'},'5':{ type: 'String',default:'none'}},
            crown:{ type: mongoose.Schema.Types.Boolean, required: false,default: false },
            removed: { type: mongoose.Schema.Types.Boolean, default: false, required: false, },
            implant: { type: mongoose.Schema.Types.Boolean, required: false,default: false },
            '16-1':  {color:{ type: 'String',default:'none' }},
            '16-2':  {color:{ type: 'String',default:'none' }},
            '16-3':  {color:{ type: 'String',default:'none' }},
            '16-4':  {color:{ type: 'String',default:'none' }},
        },


        '38': {
            description:{type:'String',default:''},
            zone:{ '1':{ type: 'String',default:'none'},'2':{ type: 'String',default:'none'},'3':{ type: 'String',default:'none'},'4':{ type: 'String',default:'none'},'5':{ type: 'String',default:'none'}},
            crown:{ type: mongoose.Schema.Types.Boolean, required: false,default: false },
            removed: { type: mongoose.Schema.Types.Boolean, default: false, required: false, },
            implant: { type: mongoose.Schema.Types.Boolean, required: false,default: false },
            '38-1':  {color:{ type: 'String',default:'none' }},
            '38-2':  {color:{ type: 'String',default:'none' }},
            '38-3':  {color:{ type: 'String',default:'none' }},
            '38-4':  {color:{ type: 'String',default:'none' }},
        },
        '37': {
            description:{type:'String',default:''},
            zone:{ '1':{ type: 'String',default:'none'},'2':{ type: 'String',default:'none'},'3':{ type: 'String',default:'none'},'4':{ type: 'String',default:'none'},'5':{ type: 'String',default:'none'}},
            crown:{ type: mongoose.Schema.Types.Boolean, required: false,default: false },
            removed: { type: mongoose.Schema.Types.Boolean, default: false, required: false, },
            implant: { type: mongoose.Schema.Types.Boolean, required: false,default: false },
            '37-1':  {color:{ type: 'String',default:'none'}},
            '37-2':  {color:{ type: 'String',default:'none'}},
            '37-3':  {color:{ type: 'String',default:'none'}},
            '37-4':  {color:{ type: 'String',default:'none'}},
        },
        '36': {
            description:{type:'String',default:''},
            zone:{ '1':{ type: 'String',default:'none'},'2':{ type: 'String',default:'none'},'3':{ type: 'String',default:'none'},'4':{ type: 'String',default:'none'},'5':{ type: 'String',default:'none'}},
            crown:{ type: mongoose.Schema.Types.Boolean, required: false,default: false },
            removed: { type: mongoose.Schema.Types.Boolean, default: false, required: false, },
            implant: { type: mongoose.Schema.Types.Boolean, required: false,default: false },
            '36-1': {color:{ type: 'String',default:'none' }},
            '36-2': {color:{ type: 'String',default:'none' }},
            '36-3': {color:{ type: 'String',default:'none' }},
            '36-4': {color:{ type: 'String',default:'none' }},
        },


        '48': {
            description:{type:'String',default:''},
            zone:{ '1':{ type: 'String',default:'none'},'2':{ type: 'String',default:'none'},'3':{ type: 'String',default:'none'},'4':{ type: 'String',default:'none'},'5':{ type: 'String',default:'none'}},
            crown:{ type: mongoose.Schema.Types.Boolean, required: false,default: false },
            removed: { type: mongoose.Schema.Types.Boolean, default: false, required: false, },
            implant: { type: mongoose.Schema.Types.Boolean, required: false,default: false },
            '48-1': {color:{ type: 'String',default:'none' }},
            '48-2': {color:{ type: 'String',default:'none' }},
            '48-3': {color:{ type: 'String',default:'none' }},
            '48-4': {color:{ type: 'String',default:'none' }},
        },
        '47': {
            description:{type:'String',default:''},
            zone:{ '1':{ type: 'String',default:'none'},'2':{ type: 'String',default:'none'},'3':{ type: 'String',default:'none'},'4':{ type: 'String',default:'none'},'5':{ type: 'String',default:'none'}},
            crown:{ type: mongoose.Schema.Types.Boolean, required: false,default: false },
            removed: { type: mongoose.Schema.Types.Boolean, default: false, required: false, },
            implant: { type: mongoose.Schema.Types.Boolean, required: false,default: false },
            '47-1': {color:{ type: 'String',default:'none'}},
            '47-2': {color:{ type: 'String',default:'none'}},
            '47-3': {color:{ type: 'String',default:'none'}},
            '47-4': {color:{ type: 'String',default:'none'}},
        },
        '46': {
            description:{type:'String',default:''},
            zone:{ '1':{ type: 'String',default:'none'},'2':{ type: 'String',default:'none'},'3':{ type: 'String',default:'none'},'4':{ type: 'String',default:'none'},'5':{ type: 'String',default:'none'}},
            crown:{ type: mongoose.Schema.Types.Boolean, required: false,default: false },
            removed: { type: mongoose.Schema.Types.Boolean, default: false, required: false, },
            implant: { type: mongoose.Schema.Types.Boolean, required: false,default: false },
            '46-1': {color: { type: 'String',default:'none' }},
            '46-2': {color: { type: 'String',default:'none' }},
            '46-3': {color: { type: 'String',default:'none' }},
            '46-4': {color: { type: 'String',default:'none' }},
        },


        '15': {
            description:{type:'String',default:''},
            zone:{ '1':{ type: 'String',default:'none'},'2':{ type: 'String',default:'none'},'3':{ type: 'String',default:'none'},'4':{ type: 'String',default:'none'},'5':{ type: 'String',default:'none'}},
            crown:{ type: mongoose.Schema.Types.Boolean, required: false,default: false },
            removed: { type: mongoose.Schema.Types.Boolean, default: false, required: false, },
            implant: { type: mongoose.Schema.Types.Boolean, required: false,default: false },
            '15-1': {color:{ type: 'String',default:'none'}},
            '15-2': {color:{ type: 'String',default:'none'}},
        },
        '14': {
            description:{type:'String',default:''},
            zone:{ '1':{ type: 'String',default:'none'},'2':{ type: 'String',default:'none'},'3':{ type: 'String',default:'none'},'4':{ type: 'String',default:'none'},'5':{ type: 'String',default:'none'}},
            crown:{ type: mongoose.Schema.Types.Boolean, required: false,default: false },
            removed: { type: mongoose.Schema.Types.Boolean, default: false, required: false, },
            implant: { type: mongoose.Schema.Types.Boolean, required: false,default: false },
            '14-1': {color: { type: 'String',default:'none' }},
            '14-2': {color: { type: 'String',default:'none' }},
        },
        '13': {
            description:{type:'String',default:''},
            zone:{ '1':{ type: 'String',default:'none'},'2':{ type: 'String',default:'none'},'3':{ type: 'String',default:'none'},'4':{ type: 'String',default:'none'}},
            crown:{ type: mongoose.Schema.Types.Boolean, required: false,default: false },
            removed: { type: mongoose.Schema.Types.Boolean, default: false, required: false, },
            implant: { type: mongoose.Schema.Types.Boolean, required: false,default: false },
            '13-1': {color: { type: 'String',default:'none' }},
            '13-2': {color: { type: 'String',default:'none' }},
        },
        '12': {
            description:{type:'String',default:''},
            zone:{ '1':{ type: 'String',default:'none'},'2':{ type: 'String',default:'none'},'3':{ type: 'String',default:'none'},'4':{ type: 'String',default:'none'}},
            crown:{ type: mongoose.Schema.Types.Boolean, required: false,default: false },
            removed: { type: mongoose.Schema.Types.Boolean, default: false, required: false, },
            implant: { type: mongoose.Schema.Types.Boolean, required: false,default: false },
            '12-1': {color: { type: 'String',default:'none'}},
            '12-2': {color: { type: 'String',default:'none'}},
        },
        '11': {
            description:{type:'String',default:''},
            zone:{ '1':{ type: 'String',default:'none'},'2':{ type: 'String',default:'none'},'3':{ type: 'String',default:'none'},'4':{ type: 'String',default:'none'}},
            crown:{ type: mongoose.Schema.Types.Boolean, required: false,default: false },
            removed: { type: mongoose.Schema.Types.Boolean, default: false, required: false, },
            implant: { type: mongoose.Schema.Types.Boolean, required: false,default: false },
            '11-1': {color: { type: 'String',default:'none' }},
            '11-2': {color: { type: 'String',default:'none' }},
        },


        '25': {
            description:{type:'String',default:''},
            zone:{ '1':{ type: 'String',default:'none'},'2':{ type: 'String',default:'none'},'3':{ type: 'String',default:'none'},'4':{ type: 'String',default:'none'},'5':{ type: 'String',default:'none'}},
            crown:{ type: mongoose.Schema.Types.Boolean, required: false,default: false },
            removed: { type: mongoose.Schema.Types.Boolean, default: false, required: false, },
            implant: { type: mongoose.Schema.Types.Boolean, required: false,default: false },
            '25-1': {color:{ type: 'String' ,default:'none'}},
            '25-2': {color:{ type: 'String' ,default:'none'}},
        },
        '24': {
            description:{type:'String',default:''},
            zone:{ '1':{ type: 'String',default:'none'},'2':{ type: 'String',default:'none'},'3':{ type: 'String',default:'none'},'4':{ type: 'String',default:'none'},'5':{ type: 'String',default:'none'}},
            crown:{ type: mongoose.Schema.Types.Boolean, required: false,default: false },
            removed: { type: mongoose.Schema.Types.Boolean, default: false, required: false, },
            implant: { type: mongoose.Schema.Types.Boolean, required: false,default: false },
            '24-1': {color: { type: 'String' ,default:'none'}},
            '24-2': {color: { type: 'String' ,default:'none'}},
        },
        '23': {
            description:{type:'String',default:''},
            zone:{ '1':{ type: 'String',default:'none'},'2':{ type: 'String',default:'none'},'3':{ type: 'String',default:'none'},'4':{ type: 'String',default:'none'}},
            crown:{ type: mongoose.Schema.Types.Boolean, required: false,default: false },
            removed: { type: mongoose.Schema.Types.Boolean, default: false, required: false, },
            implant: { type: mongoose.Schema.Types.Boolean, required: false,default: false },
            '23-1': {color: { type: 'String' ,default:'none'}},
            '23-2': {color: { type: 'String' ,default:'none'}},
        },
        '22': {
            description:{type:'String',default:''},
            zone:{ '1':{ type: 'String',default:'none'},'2':{ type: 'String',default:'none'},'3':{ type: 'String',default:'none'},'4':{ type: 'String',default:'none'}},
            crown:{ type: mongoose.Schema.Types.Boolean, required: false,default: false },
            removed: { type: mongoose.Schema.Types.Boolean, default: false, required: false, },
            implant: { type: mongoose.Schema.Types.Boolean, required: false,default: false },
            '22-1': {color: { type: 'String' ,default:'none'}},
            '22-2': {color: { type: 'String' ,default:'none'}},
        },
        '21': {
            description:{type:'String',default:''},
            zone:{ '1':{ type: 'String',default:'none'},'2':{ type: 'String',default:'none'},'3':{ type: 'String',default:'none'},'4':{ type: 'String',default:'none'}},
            crown:{ type: mongoose.Schema.Types.Boolean, required: false,default: false },
            removed: { type: mongoose.Schema.Types.Boolean, default: false, required: false, },
            implant: { type: mongoose.Schema.Types.Boolean, required: false,default: false },
            '21-1': {color:{ type: 'String' ,default:'none'}},
            '21-2': {color:{ type: 'String' ,default:'none'}},
        },


        '35': {
            description:{type:'String',default:''},
            zone:{ '1':{ type: 'String',default:'none'},'2':{ type: 'String',default:'none'},'3':{ type: 'String',default:'none'},'4':{ type: 'String',default:'none'},'5':{ type: 'String',default:'none'}},
            crown:{ type: mongoose.Schema.Types.Boolean, required: false,default: false },
            removed: { type: mongoose.Schema.Types.Boolean, default: false, required: false, },
            implant: { type: mongoose.Schema.Types.Boolean, required: false,default: false },
            '35-1': {color: { type: 'String',default:'none'}},
            '35-2': {color: { type: 'String',default:'none'}},
        },
        '34': {
            description:{type:'String',default:''},
            zone:{ '1':{ type: 'String',default:'none'},'2':{ type: 'String',default:'none'},'3':{ type: 'String',default:'none'},'4':{ type: 'String',default:'none'},'5':{ type: 'String',default:'none'}},
            crown:{ type: mongoose.Schema.Types.Boolean, required: false,default: false },
            removed: { type: mongoose.Schema.Types.Boolean, default: false, required: false, },
            implant: { type: mongoose.Schema.Types.Boolean, required: false,default: false },
            '34-1':  {color:{ type: 'String',default:'none' }},
            '34-2':  {color:{ type: 'String',default:'none' }},
        },
        '33': {
            description:{type:'String',default:''},
            zone:{ '1':{ type: 'String',default:'none'},'2':{ type: 'String',default:'none'},'3':{ type: 'String',default:'none'},'4':{ type: 'String',default:'none'}},
            crown:{ type: mongoose.Schema.Types.Boolean, required: false,default: false },
            removed: { type: mongoose.Schema.Types.Boolean, default: false, required: false, },
            implant: { type: mongoose.Schema.Types.Boolean, required: false,default: false },
            '33-1': {color:{ type: 'String',default:'none' }},
            '33-2': {color:{ type: 'String',default:'none' }},
        },
        '32': {
            description:{type:'String',default:''},
            zone:{ '1':{ type: 'String',default:'none'},'2':{ type: 'String',default:'none'},'3':{ type: 'String',default:'none'},'4':{ type: 'String',default:'none'}},
            crown:{ type: mongoose.Schema.Types.Boolean, required: false,default: false },
            removed: { type: mongoose.Schema.Types.Boolean, default: false, required: false, },
            implant: { type: mongoose.Schema.Types.Boolean, required: false,default: false },
            '32-1': {color: { type: 'String' ,default:'none'}},
            '32-2': {color: { type: 'String' ,default:'none'}},
        },
        '31': {
            description:{type:'String',default:''},
            zone:{ '1':{ type: 'String',default:'none'},'2':{ type: 'String',default:'none'},'3':{ type: 'String',default:'none'},'4':{ type: 'String',default:'none'}},
            crown:{ type: mongoose.Schema.Types.Boolean, required: false,default: false },
            removed: { type: mongoose.Schema.Types.Boolean, default: false, required: false, },
            implant: { type: mongoose.Schema.Types.Boolean, required: false,default: false },
            '31-1': {color: { type: 'String',default:'none'}},
            '31-2': {color: { type: 'String',default:'none'}},
        },


        '45': {
            description:{type:'String',default:''},
            zone:{ '1':{ type: 'String',default:'none'},'2':{ type: 'String',default:'none'},'3':{ type: 'String',default:'none'},'4':{ type: 'String',default:'none'},'5':{ type: 'String',default:'none'}},
            crown:{ type: mongoose.Schema.Types.Boolean, required: false,default: false },
            removed: { type: mongoose.Schema.Types.Boolean, default: false, required: false, },
            implant: { type: mongoose.Schema.Types.Boolean, required: false,default: false },
            '45-1': {color:{ type: 'String' ,default:'none'}},
            '45-2': {color:{ type: 'String' ,default:'none'}},
        },
        '44': {
            description:{type:'String',default:''},
            zone:{ '1':{ type: 'String',default:'none'},'2':{ type: 'String',default:'none'},'3':{ type: 'String',default:'none'},'4':{ type: 'String',default:'none'},'5':{ type: 'String',default:'none'}},
            crown:{ type: mongoose.Schema.Types.Boolean, required: false,default: false },
            removed: { type: mongoose.Schema.Types.Boolean, default: false, required: false, },
            implant: { type: mongoose.Schema.Types.Boolean, required: false,default: false },
            '44-1': {color: { type: 'String',default:'none' }},
            '44-2': {color: { type: 'String',default:'none' }},
        },
        '43': {
            description:{type:'String',default:''},
            zone:{ '1':{ type: 'String',default:'none'},'2':{ type: 'String',default:'none'},'3':{ type: 'String',default:'none'},'4':{ type: 'String',default:'none'}},
            crown:{ type: mongoose.Schema.Types.Boolean, required: false,default: false },
            removed: { type: mongoose.Schema.Types.Boolean, default: false, required: false, },
            implant: { type: mongoose.Schema.Types.Boolean, required: false,default: false },
            '43-1': {color: { type: 'String',default:'none'}},
            '43-2': {color: { type: 'String',default:'none'}},
        },
        '42': {
            description:{type:'String',default:''},
            zone:{ '1':{ type: 'String',default:'none'},'2':{ type: 'String',default:'none'},'3':{ type: 'String',default:'none'},'4':{ type: 'String',default:'none'}},
            crown:{ type: mongoose.Schema.Types.Boolean, required: false,default: false },
            removed: { type: mongoose.Schema.Types.Boolean, default: false, required: false, },
            implant: { type: mongoose.Schema.Types.Boolean, required: false,default: false },
            '42-1': {color: { type: 'String',default:'none' }},
            '42-2': {color: { type: 'String',default:'none' }},
        },
        '41': {
            description:{type:'String',default:''},
            zone:{ '1':{ type: 'String',default:'none'},'2':{ type: 'String',default:'none'},'3':{ type: 'String',default:'none'},'4':{ type: 'String',default:'none'}},
            crown:{ type: mongoose.Schema.Types.Boolean, required: false,default: false },
            removed: { type: mongoose.Schema.Types.Boolean, default: false, required: false, },
            implant: { type: mongoose.Schema.Types.Boolean, required: false,default: false },
            '41-1': {color: { type: 'String',default:'none' }},
            '41-2': {color: { type: 'String',default:'none' }},
        },

    },

} );


exports.Card = mongoose.model ( 'Card', CardSchema );