/**
 * Created by OlegN on 28.09.2018.
 */
const router = express.Router ( { mergeParams: true } );
const posts = require ( './post' );
const get = require ( './get' );


router.use ( '/wall', posts );
router.use ( '/wall', get );

module.exports = router;