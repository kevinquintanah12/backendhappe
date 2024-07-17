const express = require('express');
const router = express.Router();
const variosController = require('../controllers/variosController');


// @route   GET /api/product/all-products
// @desc    Retrieve all products
router.get('/varios', variosController.getAllVarios);
router.delete('/eliminarvarios/:varioId', variosController.removeVario);
router.put('/editarvarios', variosController.updateVario);
router.post('/agregarvarios', variosController.agregarVario);
router.get('/buscar', variosController.searchVarios);  // Nueva ruta para búsqueda



module.exports = router;
