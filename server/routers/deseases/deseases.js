/**
 * Created by admin on 29.08.2018.
 */
const router = express.Router ( { mergeParams: true } );
const posts = require ( './post' );
const get = require ( './get' );


router.use ( '/desease', posts );
//router.use ( '/desease', get );

module.exports = router;