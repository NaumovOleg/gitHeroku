/**
 * Created by admin on 22.08.2018.
 */
const router = express.Router({mergeParams:true});
const posts = require('./post');
const get = require ( './get' );

router.use('/cabinet', get );
router.use('/cabinet', posts );

module.exports = router;