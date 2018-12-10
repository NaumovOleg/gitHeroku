const router = express.Router({mergeParams:true});
const post = require('./post');
const get = require('./get');

const AUTH_MIDDLEWARE = require( '../middelwares/AuthMiddleWare');

//router.use('/patient',AUTH_MIDDLEWARE.chechAuth, posts );
router.use('/periodental-chart',AUTH_MIDDLEWARE.chechAuth,  get );
router.use('/periodental-chart',AUTH_MIDDLEWARE.chechAuth,  post );

module.exports = router;