const Categoria = require('../models/categoria');

// @route   POST /api/category/add-category
// @desc    Add Category
const añadirCategoria = async (req, res) => {
    const { categoria } = req.body;

    try {
        if (!categoria) {
            return res.status(400).json({ error: 'Please provide a category' });
        }

        const nuevaCategoria = await Categoria.create({ nombre: categoria });

        res.status(201).json(nuevaCategoria);
    } catch (error) {
        res.status(500).json({ error: 'Failed to add category', details: error.message });
    }
};

// @route   GET /api/category/get-categories
// @desc    Get Categories
const getCategories = async (req, res) => {
    try {
        const categorias = await Categoria.findAll();

        res.status(200).json(categorias);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve categories', details: error.message });
    }
};

// @route   GET /api/category/get-category/:id
// @desc    Get Category by ID
const getCategoryById = async (req, res) => {
    const { id } = req.params;

    try {
        const categoria = await Categoria.findByPk(id);

        if (!categoria) {
            return res.status(404).json({ error: 'Category not found' });
        }

        res.status(200).json(categoria);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve category', details: error.message });
    }
};

module.exports = {
    añadirCategoria,
    getCategories,
    getCategoryById
};
