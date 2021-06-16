const router = require('express-promise-router')();

const { checkJWTSign } = require('../middlewares/jwtCheck.middleware');
const { song } = require('../controllers');

router.route('/:id').get(checkJWTSign, song.get);
router.route('/').post(song.create);
router.route('/').get(checkJWTSign, song.getAll);
router.route('/:id').put(song.update);
router.route('/:id').delete(song.delete);

module.exports = router;
