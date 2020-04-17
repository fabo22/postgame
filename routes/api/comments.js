const router = require('express').Router();
const commentsCtrl = require('../../controllers/comments');

router.post('/', commentsCtrl.create);
router.delete('/:id', commentsCtrl.delete);
router.put('/:id', commentsCtrl.update);

module.exports = router;