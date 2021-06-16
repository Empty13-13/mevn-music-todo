const router = require('express-promise-router')();

const { author } = require('../controllers');

router.route('/:id').get(author.get);
router.route('/').post(author.create);
router.route('/').get(author.getAll);
router.route('/:id').put(author.update);
router.route('/:id').delete(author.delete);

module.exports = router;
