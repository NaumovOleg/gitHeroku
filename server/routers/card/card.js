/**
 * Created by admin on 27.08.2018.
 */
const router = express.Router({mergeParams:true});
const posts = require('./post');
const get = require('./get');


const AUTH_MIDDLEWARE = require( '../middelwares/AuthMiddleWare');

router.use('/card',AUTH_MIDDLEWARE.chechAuth, posts );
router.use('/card',AUTH_MIDDLEWARE.cardAuth,  get );

module.exports = router;