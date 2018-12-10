const router = express.Router({mergeParams:true});
const posts = require('./post');
const get = require('./get');

const AUTH_MIDDLEWARE = require( '../middelwares/AuthMiddleWare');

router.use('/statistyc', posts );
router.use('/statistyc',  get );

module.exports = router;