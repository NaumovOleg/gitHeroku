/**
 * Created by admin on 14.09.2018.
 */
const router = express.Router({mergeParams:true});
const posts = require('./post');
const get = require('./get');


const AUTH_MIDDLEWARE = require( '../middelwares/AuthMiddleWare');

//router.use('/calendar', posts );
router.use('/calendar',  get );
router.use('/calendar',  posts );

module.exports = router;