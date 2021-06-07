const router = require('express-promise-router')();

const { repetition } = require('../controllers');

router.route('/:id').get(repetition.get);
router.route('/').post(repetition.create);
router.route('/').get(repetition.getAll);
router.route('/:id').put(repetition.update);
router.route('/:id').delete(repetition.delete);

module.exports = router;
