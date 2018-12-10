const router = express.Router ( { mergeParams: true } );

const PatientCore = require ( '../../core/Patient' );
const CardCore = require ( '../../core/Card' );
const ChartCore = require ( '../../core/periodentalChart/periodental' );

router.post ( '/add', async ( req, res ) => {

    let patientData = req.body.patient;
    let user = JSON.parse ( req.session.passport.user );
    patientData.cabinet = user.cabinet;

    try {
        let patient = await PatientCore.addPatient ( patientData );
        let chart = await ChartCore.createDefault ( patient._id );
        console.log ( chart );


        let patientCard = {
            patientname:    patient.name,
            patientsurname: patient.surname,
            notes:          '',
            deseases:       [],
            patient:        patient._id,
            cabinet:        user.cabinet,
        };

        let card = await CardCore.addCard ( patientCard );

        patient.card = card._id;

        let updatedPatient = await PatientCore.updatePatient ( { _id: patient._id }, { card: card._id } );

        let code = user.cabinetCode;
        let patientList = await PatientCore.getPatiensInCabinet ( code );

        res.send ( { patients: patientList } );
    } catch ( error ) {
        res.status ( 400 );
        return res.send ( { error: error, message: 'database error' } );
    }


} );

router.post ( '/update/:id', async ( req, res ) => {
        const patientId = req.params.id;
        const patientData = req.body;

        try {
            const updatedPatient = await PatientCore.findAndUpdatePatient ( {
                _id: patientId,
            }, patientData );

            return res.send ( { patient: updatedPatient } );
        } catch ( error ) {
            res.status ( 400 );
            return res.send ( { error: error, message: 'database error' } );
        }
    
    
    } );

router.post ( '/remove', async ( req, res ) => {
    const idList = req.body.idList;
    let user = JSON.parse ( req.session.passport.user );
    try {
        await PatientCore.deletePatients ( idList );
        let cards = await CardCore.getCardIds ( idList );
        let charts = await ChartCore.removeChart( idList );
        console.log( charts , idList )
        let removed = await CardCore.removeCards ( cards );
        let code = user.cabinetCode;
        let patientList = await PatientCore.getPatiensInCabinet ( code );
        res.send ( { patients: patientList } );

    } catch ( error ) {
        console.log( error )
        res.status ( 400 );
        return res.send ( { error: error, message: 'database error' } );
    }
} );


module.exports = router;
