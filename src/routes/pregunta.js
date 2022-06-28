const express = require('express');
const router = express.Router();

const preguntaController = require('../controllers/preguntaController');

router.get('/', preguntaController.list)
router.get('/:id', preguntaController.preguntasByID)
router.get('/add/:id', preguntaController.add)
router.post('/add/:id', preguntaController.create)

module.exports = router;