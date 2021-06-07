const router = require('express-promise-router')();

const { song } = require('../controllers');

router.route('/:id').get(song.get);
router.route('/').post(song.create);
router.route('/').get(song.getAll);
router.route('/:id').put(song.update);
router.route('/:id').delete(song.delete);

module.exports = router;
