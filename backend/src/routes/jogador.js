var express = require('express');
var router = express.Router();

var jogador_controller = require('../controllers/jogador');

router.post('', jogador_controller.jogadorCreate);
router.get('', jogador_controller.jogadorAll);
router.get('/:id', jogador_controller.jogadorDetails);
router.put('/:id', jogador_controller.jogadorUpdate);
router.delete('/:id', jogador_controller.jogadorDelete);

module.exports = router;