const router = require('express-promise-router')();

const { songDescription } = require('../controllers');

router.route('/:id').get(songDescription.get);
router.route('/').post(songDescription.create);
router.route('/').get(songDescription.getAll);
router.route('/:id').put(songDescription.update);
router.route('/:id').delete(songDescription.delete);

module.exports = router;
