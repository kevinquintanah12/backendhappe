const Diseño = require('../models/diseño');

// @route   GET /api/product/all-products
// @desc    All Products
const getAllVarios = async (req, res) => {
    try {
        const varios = await Varios.findAll({});
        res.status(200).json(varios);
    } catch (error) {
        console.error('Error retrieving varios:', error); // Imprime el error completo en la consola
        res.status(500).json({ error: 'Failed to retrieve varios' });
    }
};

module.exports = {
    getAllVarios,
    
};
