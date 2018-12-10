/**
 * Created by OlegN on 18.08.2018.
 */
const router = express.Router ( { mergeParams: true } );
const posts = require ( './post' );
const get = require ( './get' );

const permissionMiddleWare = require( '../middelwares/permissionsMiddleWare.js');


router.use ( '/user', get );
router.use ( '/user', permissionMiddleWare.isAdmin, posts );

module.exports = router;