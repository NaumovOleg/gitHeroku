
const CHART  = require('../../db/shemas/Periodontal-Cahrt' ).Chart;
const mongoose = require('../../db/connection').mongoose


const Chart = {

    createDefault:( patient )=>{
        let chart = new CHART({patient:patient});
        return chart.save();
    },

    getChart :( patient )=>{
        return CHART.findOne({patient:patient})
    },

    removeChart :( patients )=>{
        let patientsIds = [...patients];
        return CHART.deleteMany ( {
            'patient': { $in: patientsIds.map ( patient =>  mongoose.Types.ObjectId ( patient ) ) },
        } );
    },
    updateChart:(patient, data )=>{
        return CHART.findOneAndUpdate(
            {patient:patient},{
                $set:{
                    chart:{
                        up:data.up,
                        down:data.down
                    }
                }
            },{new:true}
        );
    }


};

module.exports = Chart;