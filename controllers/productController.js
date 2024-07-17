const Categoria = require('../models/categoria');  // Ajusta la ruta según tu estructura de archivos
const Productos = require('../models/productos');  // Ajusta la ruta según tu estructura de archivos
const { Op } = require('sequelize');
const { Sequelize } = require('sequelize');

// @desc    All Products
const getAllProducts = async (req, res) => {
    try {
        const products = await Productos.findAll({});
        res.status(200).json(products);
    } catch (error) {
        console.error('Error retrieving products:', error); // Imprime el error completo en la consola
        res.status(500).json({ error: 'Failed to retrieve products' });
    }
};

const agregarProducto = async (req, res) => {
    const {
        codigo,
        nombre,
        descripcion,
        categoria,
        precioVenta,
        precioCompra,
        stock,
        presentacion,
        ganancia
    } = req.body;

    try {
        // Verificar si el código del producto ya existe
        const existingProduct = await Productos.findOne({ where: { codigo } });
        if (existingProduct) {
            return res.status(400).json({ error: 'Este codigo ya esta registrado' });
        }

        // Busca la categoría por su nombre
        const existingCategory = await Categoria.findOne({ where: { nombre: categoria } });
        if (!existingCategory) {
            return res.status(400).json({ error: 'Categoria no encontrada' });
        }

        // Crea un nuevo producto y asigna la categoría
        const newProduct = await Productos.create({
            codigo,
            nombre,
            descripcion,
            categoria: existingCategory.id, // Asigna el ID de la categoría encontrada
            precioVenta,
            precioCompra,
            stock,
            presentacion,
            ganancia
        });

        res.status(201).json(newProduct);
    } catch (error) {
        console.error('Error adding product:', error); // Imprime el error completo en la consola
        console.error(error); // Imprime el error completo para tener detalles específicos
        res.status(500).json({ error: 'Failed to add product', details: error.message });
    }
};




const searchProducts = async (req, res) => {
    const { query } = req.query;
  
    try {
      const products = await Productos.findAll({
        where: {
          [Op.or]: [
            Sequelize.where(Sequelize.fn('LOWER', Sequelize.col('codigo')), {
              [Op.substring]: query.toLowerCase()
            }),
            Sequelize.where(Sequelize.fn('LOWER', Sequelize.col('nombre')), {
              [Op.substring]: query.toLowerCase()
            })
          ]
        }
      });
  
      res.status(200).json(products);
    } catch (error) {
      console.error('Error searching products:', error);
      res.status(500).json({ error: 'Failed to search products', details: error.message });
    }
  };
  

// @route   PUT /api/product/update-product
// @desc    Update Product
const updateProduct = async (req, res) => {
    const { id, codigo, nombre, descripcion, categoria, precioVenta, precioCompra, stock, presentacion, ganancia } = req.body;

    try {
        const updatedProduct = await Productos.update({
            codigo,
            nombre,
            descripcion,
            categoria,
            precioVenta,
            precioCompra,
            stock,
            presentacion,
            ganancia
        }, {
            where: { id }
        });

        if (updatedProduct[0] === 0) {
            return res.status(404).json({ error: 'Product not found' });
        }

        res.status(200).json({ message: 'Product updated successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to update product' });
    }
};



// @route   GET /api/product/product-filter/:category
// @desc    Filter Product by Category

// @route   DELETE /api/product/remove-product/:productId
// @desc    Remove Product
const removeProduct = async (req, res) => {
    const { productId } = req.params;

    try {
        const product = await Productos.findByPk(productId);

        if (!product) {
            return res.status(404).json({ error: 'Product not found' });
        }

        await product.destroy();
        res.status(200).json({ message: 'Product deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete product' });
    }
};

module.exports = {
    getAllProducts,
    agregarProducto,
    updateProduct,
    removeProduct,
    searchProducts
};
