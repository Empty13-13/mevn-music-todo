const router = require('express-promise-router')();

const { setList } = require('../controllers');

router.route('/:id').get(setList.get);
router.route('/').post(setList.create);
router.route('/').get(setList.getAll);
router.route('/:id').put(setList.update);
router.route('/:id').delete(setList.delete);

module.exports = router;
