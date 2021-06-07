const router = require('express-promise-router')();

const { budget } = require('../controllers');

router.route('/:id').get(budget.get);
router.route('/').post(budget.create);
router.route('/').get(budget.getAll);
router.route('/:id').put(budget.update);
router.route('/:id').delete(budget.delete);

module.exports = router;
