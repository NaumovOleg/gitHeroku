/**
 * Created by OlegN on 18.08.2018.
 */
const router = express.Router({ mergeParams: true });
const CabinetCore = require('../../core/Cabinet');
const CardCore = require('../../core/Card');
const PatientCore = require('../../core/Patient');
const Crypto = require('../../db/crypto/crypto');
const UserCore = require('../../core/User');

router.post('/login', localPassport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/gets',
    failureFlash: true
}));

router.get('/sign-out', (req, res) => {
    req.logout();
    res.redirect('/');
});

router.get('/is-logined', async (req, res) => {
    if (req.isAuthenticated()) {
        let user = JSON.parse(req.session.passport.user);
        let cabinet = R.pick(['address', 'adimnemail', 'phone', 'name', '_id'], await CabinetCore.getCabinetBuId(user.cabinet));
        return res.send({ auth: req.isAuthenticated(), user: user, cabinet: cabinet });
    }
    return res.send({ auth: req.isAuthenticated(), user: null, cabinet: null });
});

router.post('/is-logined-crypto', async (req, res) => {
    if (req.isAuthenticated()) {

        const user = JSON.parse(req.session.passport.user);
        const { itemData = {id: '', label: ''} } = req.body;

        try {

            let cabinet = await CabinetCore.getCabinetByCode(user.cabinetCode);
            let cabinetId = cabinet._id;


            const userData = user._id;

            const data = { user: userData, itemData };
            const token = Crypto.encryptData(JSON.stringify(data), 'dental');

            return res.send({ token });

        } catch (error) {

            res.status(400);
            return res.send(error)

        }
    }
    return res.send({ auth: req.isAuthenticated(), user: null, cabinet: null });
});

router.post('/token-decrypt', async (req, res) => {

        try {
            const token = JSON.parse(Crypto.decryptData(req.body.token, 'dental'));
            const { itemData = null } = token;

            return res.send({ itemData });

        } catch (error) {

            res.status(400);
            return res.send(error)

        }

    return res.send({ error: 'No permission' });
});

const directCardImageUpdate = async (req, res, userId, itemId, images) => {
    try {  
        const user = await UserCore.getUserById(userId);

        let cabinet = await CabinetCore.getCabinetByCode(user.cabinetCode);
        let cabinetId = cabinet._id;

        let card = await CardCore.getCard(itemId);

        if (card.cabinet.toString() !== cabinetId.toString()) {

            throw new Error('no permission');

        };

        const updatedCard = await CardCore.updateImages(itemId, images);

        return res.send(updatedCard.images);

    } catch (error) {

        res.status(400);
        return res.send(error)

    }

    res.status(401);
    return res.send({ error: 'No permission' });
}

const directPatientImageUpdate = async (req, res, userId, itemId, image) => {
    try {
        const updatedPatient = await PatientCore.findAndUpdatePatient ( {
            _id: itemId,
        }, { image } );

        return res.send ( { patient: updatedPatient } );
    } catch ( error ) {
        res.status ( 400 );
        return res.send ( { error: error, message: 'database error' } );
    }
}

const directUserImageUpdate = async (req, res, userId, itemId, image) => {
    try {
        const data = req.body;
        const { user_id } = req.query;

        const updatedUser = await UserCore.update(userId, { image });
        req.session.passport.user = JSON.stringify(updatedUser);
        return res.send (updatedUser);
            
    } catch ( error ) {

        res.status ( 401 );
        return res.send ( { error: error, message: 'unauthorised' } );
    }
}

router.post('/direct-update/images', (req, res, next) => {
    
    const token = JSON.parse(Crypto.decryptData(req.body.token, 'dental'));
    const images = req.body.images;
    const { itemData: {id = '', label = ''} } = token;
    const userId = token.user;

    switch (label) {
        case 'cards':
            return directCardImageUpdate(req, res, userId, id, images);
        case 'users':
            return directUserImageUpdate(req, res, userId, id, images);
        case 'patients':
            return directPatientImageUpdate(req, res, userId, id, images);
        default:
            return res.send({ response: 'Nothing to update' });
    }
});

module.exports = router;