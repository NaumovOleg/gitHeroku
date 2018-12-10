const mongoose = require ( '../connection.js' ).mongoose;


const StatistycSchema = mongoose.Schema ( {

    cabinet:   {
        type:     'String',
        required: true,
    },
    statistyc: [
        {
            section: {
                name:  {
                    type: 'String',
                },
                items: [
                    {
                        name:  {
                            type: 'String',
                        },
                        dates: [
                            {
                                date:{
                                    type:'String'
                                },
                                currentPrice:'Number'
                            }
                        ],
                        price: {
                            type: 'Number',
                        },
                    },
                ],

            },
        },
    ],

    additionalItems: [],

} );

exports.Statistyc = mongoose.model ( 'Statistyc', StatistycSchema );