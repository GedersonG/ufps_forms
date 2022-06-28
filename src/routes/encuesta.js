const express = require('express');
const router = express.Router();

const encuestaController = require('../controllers/encuestaController');

router.get('/', encuestaController.list)
router.post('/save', encuestaController.save)
router.get('/fin', encuestaController.fin)
router.get('/:id', encuestaController.encuestaById)

module.exports = router;