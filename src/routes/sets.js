const router = require('express-promise-router')();

const { set } = require('../controllers');

router.route('/:id').get(set.get);
router.route('/').post(set.create);
router.route('/').get(set.getAll);
router.route('/:id').put(set.update);
router.route('/:id').delete(set.delete);

module.exports = router;
