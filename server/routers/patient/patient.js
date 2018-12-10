/**
 * Created by admin on 23.08.2018.
 */
const router = express.Router({mergeParams:true});
const posts = require('./post');
const get = require('./get');

const AUTH_MIDDLEWARE = require( '../middelwares/AuthMiddleWare');

router.use('/patient',AUTH_MIDDLEWARE.chechAuth, posts );
router.use('/patient',AUTH_MIDDLEWARE.chechAuth,  get );

module.exports = router;