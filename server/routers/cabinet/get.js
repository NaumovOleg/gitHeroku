const router = express.Router({ mergeParams: true });
const UserCore = require('../../core/User');
const CabinetCore = require('../../core/Cabinet');


router.get('/', async (req, res, next) => {
  const cabinets = await CabinetCore.getAllCabinets();
  const filteredCabinets = cabinets.map(({ creationDate }) => creationDate)

  return res.send(filteredCabinets)
});


module.exports = router;