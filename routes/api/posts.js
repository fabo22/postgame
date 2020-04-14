const router = require('express').Router();
const postsCtrl = require('../../controllers/posts');

router.get('/', postsCtrl.index);
router.get('/:id', postsCtrl.show);

router.post('/', postsCtrl.create);
router.delete('/:id', postsCtrl.delete);
router.put('/:id', postsCtrl.update);

module.exports = router;