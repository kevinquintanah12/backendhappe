const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');


// @route   GET /api/product/all-products
// @desc    Retrieve all products
router.get('/productos', productController.getAllProducts);
router.delete('/eliminarproducto/:productId', productController.removeProduct);
router.put('/editarproducto', productController.updateProduct);
router.post('/agregarproducto', productController.agregarProducto);
router.get('/buscar', productController.searchProducts);  // Nueva ruta para búsqueda

module.exports = router;
