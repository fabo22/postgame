const router = require('express').Router();
const gamesCtrl = require('../../controllers/games');

router.get('/games', gamesCtrl.index);

module.exports = router;