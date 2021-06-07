const router = require('express-promise-router')();

const { eventDay } = require('../controllers');

router.route('/:id').get(eventDay.get);
router.route('/').post(eventDay.create);
router.route('/').get(eventDay.getAll);
router.route('/:id').put(eventDay.update);
router.route('/:id').delete(eventDay.delete);

module.exports = router;
