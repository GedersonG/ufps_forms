const express = require('express');
const router = express.Router();

const opcionController = require('../controllers/opcionController');

router.get('/', opcionController.list)
router.get('/:id', opcionController.opcionByID)
router.get('/add/:id', opcionController.add)
router.post('/add/:id', opcionController.create)

module.exports = router;