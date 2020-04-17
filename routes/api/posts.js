const router = require('express').Router();
const postsCtrl = require('../../controllers/posts');

router.get('/', postsCtrl.index);
router.get('/:id', postsCtrl.show);

// router.use(require('../../config/auth'));

router.post('/', postsCtrl.create);
router.delete('/:id', postsCtrl.delete);

// function checkAuth(req, res, next) {
//     if (req.user) return next();
//     return res.status(401).json({err: 'User Not Authorized!'});
//   }

module.exports = router;