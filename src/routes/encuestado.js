const express = require('express');
const router = express.Router();

const encuestadoController = require('../controllers/encuestadoController');

router.get('/', encuestadoController.list)
router.post('/save', encuestadoController.save)
router.get('/encuestas/:id', encuestadoController.encuestas)
router.get('/preguntas/:id', encuestadoController.preguntas)
router.get('/poblacion/:id', encuestadoController.poblacion)
router.post('/sesion', encuestadoController.sesion)

module.exports = router;