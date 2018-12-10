const router = express.Router ( { mergeParams: true } );

const StatistycCore = require ( '../../core/statystycs/Statistyc' );


router.post ( '/init_all', async ( req, res ) => {

    try {
        let cabinet = req.body.cabinet;
        let items = req.body.items;
        let st = await StatistycCore.initDatabase ( cabinet, items );
        res.send ( st );
    } catch ( error ) {

        res.status ( 400 );
        return res.send ( { err: error } );
    }

} );

router.post ( '/add-new-section', async ( req, res ) => {
    let user = JSON.parse ( req.session.passport.user );
    let newSection = {
        name:  req.body.name,
        items: [],
    };
    try {
        let st = await StatistycCore.addNewSection ( user.cabinetCode, newSection );
        res.send ( st.statistyc );
    } catch ( error ) {

        res.status ( 400 );
        return res.send ( { err: error } );
    }

} );

router.post ( '/set-item-price', async ( req, res ) => {
    let user = JSON.parse ( req.session.passport.user );
    let { section, itemId, price } = req.body;
    let cabinet  =  user.cabinetCode;

    try {

        let statistyc = await  StatistycCore.getStatystyc( cabinet, section );

        statistyc.statistyc.forEach ( function ( el ) {
            if ( el._id == section ) {
                el.section.items.forEach ( function ( item ) {
                    if ( item._id == itemId ) {
                        item.price = price;
                    }
                } );
            }

        } );

        let saved = await  StatistycCore.saveShema ( statistyc );
        let result = await StatistycCore.aggregateStatistycData ( cabinet );
        return res.send ( result );

    } catch ( error ) {
        console.log ('stats post', error );
        res.status ( 400 );
        return res.send ( error );
    }


} );
router.post ( '/increase-item', async ( req, res ) => {

    let { section, itemId, date } = req.body;
    let user = JSON.parse ( req.session.passport.user );
    let cabinet = user.cabinetCode;

    try {

        let statistyc = await StatistycCore.getStatystyc ( cabinet, section );
        statistyc.statistyc.forEach ( function ( el ) {
            if ( el._id == section ) {
                el.section.items.forEach ( function ( item ) {
                    if ( item._id == itemId ) {
                        item.dates.push ( date );
                    }
                } );
            }

        } );
        let saved = await  StatistycCore.saveShema ( statistyc );
        let result = await StatistycCore.aggregateStatistycData ( cabinet );
        return res.send ( result );
    } catch ( error ) {
        res.status ( 400 );
        return res.send ( { err: error } );
    }

} );


router.post ( '/add-new-item', async ( req, res ) => {

    let { section, item } = req.body;
    let user = JSON.parse ( req.session.passport.user );
    let cabinet = user.cabinetCode;
    item.dates = [];
    try {
        let statistyc = await StatistycCore.getStatystyc ( cabinet, section );
        statistyc.statistyc.forEach ( function ( el ) {
            if ( el._id == section ) {
                el.section.items.push ( item );
            }
        } );
        let saved = await  StatistycCore.saveShema ( statistyc );
        let result = await StatistycCore.aggregateStatistycData ( cabinet );
        return res.send ( result );

    } catch ( error ) {
        res.status ( 400 );
        return res.send ( { err: error } );
    }

} );

router.post ( '/remove-section', async ( req, res ) => {

    let { section } = req.body;
    let user = JSON.parse ( req.session.passport.user );
    let cabinet = user.cabinetCode;
    try {
        let statistyc = await StatistycCore.removeSection( cabinet, section );
        let result = await StatistycCore.aggregateStatistycData ( cabinet );
        return res.send ( result );

    } catch ( error ) {
        res.status ( 400 );
        return res.send ( { err: error } );
    }

} );

router.post ( '/remove-item', async ( req, res ) => {

    let { section, item } = req.body;
    let user = JSON.parse ( req.session.passport.user );
    let cabinet = user.cabinetCode;
    item.dates = [];
    try {
        let statistyc = await StatistycCore.getStatystyc ( cabinet, section );
        statistyc.statistyc.forEach ( function ( el ) {
            if ( el._id == section ) {
                let itemIndex = 0 ;
                el.section.items.forEach(function ( element , index ) {
                    if( element._id == item ){
                        itemIndex = index ;
                        return;
                    }
                });
                el.section.items.splice(itemIndex, 1);
                return

            }
        } );
        let saved = await  StatistycCore.saveShema ( statistyc );
        let result = await StatistycCore.aggregateStatistycData ( cabinet );
        return res.send ( result );

    } catch ( error ) {
        res.status ( 400 );
        return res.send ( { err: error } );
    }

} );

module.exports = router;