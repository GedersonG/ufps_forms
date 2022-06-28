const express = require('express');
const router = express.Router();

const adminController = require('../controllers/adminController');

router.get('/', adminController.list)
router.post('/sesion', adminController.sesion)
router.get('/administrador', adminController.admin)

module.exports = router;