const router = require('express-promise-router')();

const { locations } = require('../controllers');

router.route('/:id').get(locations.get);
router.route('/').post(locations.create);
router.route('/').get(locations.getAll);
router.route('/:id').put(locations.update);
router.route('/:id').delete(locations.delete);

module.exports = router;
