const express = require('express');
const router = express.Router();
const serviciosController = require('../controllers/serviciosController');


// @route   GET /api/product/all-products
// @desc    Retrieve all products
router.get('/servicios', serviciosController.getAllServices);
router.delete('/eliminarservicio/:serviceId', serviciosController.removeService);
router.put('/editarservicio', serviciosController.updateService);
router.post('/agregarservicio', serviciosController.agregarServicio);
router.get('/buscar', serviciosController.searchServices);  // Nueva ruta para búsqueda

module.exports = router;
