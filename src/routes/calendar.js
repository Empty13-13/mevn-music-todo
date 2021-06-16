const router = require('express-promise-router')();

const { calendar } = require('../controllers');

router.route('/:id').get(calendar.get);
router.route('/title/:title').get(calendar.getByTitle);
router.route('/').post(calendar.create);
router.route('/').get(calendar.getAll);
router.route('/:id').put(calendar.update);
router.route('/:id').delete(calendar.delete);

module.exports = router;
