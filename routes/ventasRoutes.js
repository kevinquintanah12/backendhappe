const express = require('express');
const router = express.Router();
const ventasController = require('../controllers/ventasController');

router.post('/realizar-venta', ventasController.realizarVenta);

module.exports = router;
