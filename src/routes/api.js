const express = require('express');
const router = express.Router();

const playerCtrl = require('../controllers/playerControlller');

router.get('/', playerCtrl.getAllplayers);
router.post('/', playerCtrl.createPlayer);
router.get('/:id', playerCtrl.getOnePlayer);
router.put('/:id', playerCtrl.modifyPlayer);
router.delete('/:id', playerCtrl.deletePlayer);

module.exports = router;