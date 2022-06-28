const express = require('express');
const router = express.Router();

const respuestaController = require('../controllers/respuestaController');

router.get('/', respuestaController.list)
router.get('/:id', respuestaController.opcionByID)
router.get('/add/:id', respuestaController.add)
router.post('/add/:id', respuestaController.create)

module.exports = router;