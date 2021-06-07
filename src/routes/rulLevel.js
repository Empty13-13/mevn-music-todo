const router = require('express-promise-router')();

const { rulLevel } = require('../controllers');

router.route('/:id').get(rulLevel.get);
router.route('/').post(rulLevel.create);
router.route('/').get(rulLevel.getAll);
router.route('/:id').put(rulLevel.update);
router.route('/:id').delete(rulLevel.delete);

module.exports = router;
