const router = require('express-promise-router')();

const { notification } = require('../controllers');

router.route('/:id').get(notification.get);
router.route('/').post(notification.create);
router.route('/').get(notification.getAll);
router.route('/:id').put(notification.update);
router.route('/:id').delete(notification.delete);

module.exports = router;
