const router = require('express-promise-router')();

const { concert } = require('../controllers');

router.route('/:id').get(concert.get);
router.route('/').post(concert.create);
router.route('/').get(concert.getAll);
router.route('/:id').put(concert.update);
router.route('/:id').delete(concert.delete);

module.exports = router;
