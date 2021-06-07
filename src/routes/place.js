const router = require('express-promise-router')();

const { place } = require('../controllers');

router.route('/:id').get(place.get);
router.route('/').post(place.create);
router.route('/').get(place.getAll);
router.route('/:id').put(place.update);
router.route('/:id').delete(place.delete);

module.exports = router;
