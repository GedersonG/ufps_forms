const express = require('express');
const router = express.Router();

const adminController = require('../controllers/adminController');

// Controladores admin
// Aiuda ;(
router.get('/', adminController.list)
router.post('/sesion', adminController.sesion)
router.get('/administrador', adminController.admin)

module.exports = router;