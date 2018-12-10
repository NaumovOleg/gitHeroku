/**
 * Created by admin on 22.08.2018.
 */
const CABINET  = require('../db/shemas/Cabinet' ).Cabinet;
const USER  = require('../db/shemas/User' ).User;

const Cabinet = {

    createCabinet :  ( cabinet  ) =>{
        let Cabinet  = new CABINET( cabinet );
        return Cabinet.save();
    },

    getAllCabinets: () => CABINET.find({}),

    getCabinetBuId: ( id ) =>{
        let cabinet = CABINET.findById(  id );
        return cabinet
    },

    getCabinetByCode: ( code ) =>{
        let cabinet = CABINET.findOne(  {code:code } );
        return cabinet
    },

    updateCabinet: (condition, value )=>{

        return CABINET.update( condition, value )

    },

    updateAndGetCabinet: (cabinetId, data) => {
        return CABINET.findOneAndUpdate(
            { _id: cabinetId },
            {
                $set: {
                    ...data
                },
            },
            { new: true }
        )
    },

    addUserToCabinet : ( userId, cabinetId ) =>{

        return CABINET.update( {_id:cabinetId}, {

            $push:{
                users:userId
            }
        } )

    },

    removeUserFromCabinet:( cabinetCode, userId ) =>{

       return  CABINET.updateOne({code:cabinetCode},{

            $pull:{
                users:userId
            }
        })
    }



};

module.exports = Cabinet;