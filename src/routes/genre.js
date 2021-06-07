const router = require('express-promise-router')();

const { genre } = require('../controllers');

router.route('/:id').get(genre.get);
router.route('/').post(genre.create);
router.route('/').get(genre.getAll);
router.route('/:id').put(genre.update);
router.route('/:id').delete(genre.delete);

module.exports = router;
