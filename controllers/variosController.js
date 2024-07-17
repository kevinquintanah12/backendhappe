const Varios = require('../models/varios');  // Ajusta la ruta según tu estructura de archivos
const { Op } = require('sequelize');
const { Sequelize } = require('sequelize');

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

const agregarVario = async (req, res) => {
    const {
        codigo,
        nombre,
        descripcion,
        precio,
        precioCompra,
        ganancia
    } = req.body;

    try {
        // Aquí deberías agregar la lógica para guardar el "vario" en tu base de datos o donde corresponda
        // Por ejemplo:
        const nuevoVario = await Varios.create({
            codigo,
            nombre,
            descripcion,
            precio,
            precioCompra,
            ganancia
        });

        // Respondemos con éxito y el nuevo vario creado
        res.status(201).json(nuevoVario);
    } catch (error) {
        // En caso de error, lo capturamos y respondemos con un mensaje de error adecuado
        console.error('Error adding vario:', error);
        res.status(500).json({ error: 'Failed to add vario', details: error.message });
    }
};

const searchVarios = async (req, res) => {
    const { query } = req.query;
  
    try {
      const varios = await Varios.findAll({
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
  
      res.status(200).json(varios);
    } catch (error) {
      console.error('Error searching varios:', error);
      res.status(500).json({ error: 'Failed to search varios', details: error.message });
    }
};

// @route   PUT /api/varios/update-vario
// @desc    Update Vario
const updateVario = async (req, res) => {
    const { id, codigo, nombre, descripcion, precio, precioCompra, ganancia } = req.body;

    try {
        const updatedVario = await Varios.update({
            codigo,
            nombre,
            descripcion,
            precio,
            precioCompra,
            ganancia
        }, {
            where: { id }
        });

        if (updatedVario[0] === 0) {
            return res.status(404).json({ error: 'Vario not found' });
        }

        res.status(200).json({ message: 'Vario updated successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to update vario' });
    }
};

// @route   DELETE /api/varios/remove-vario/:varioId
// @desc    Remove Vario
const removeVario = async (req, res) => {
    const { varioId } = req.params;

    try {
        const vario = await Varios.findByPk(varioId);

        if (!vario) {
            return res.status(404).json({ error: 'Vario not found' });
        }

        await vario.destroy();
        res.status(200).json({ message: 'Vario deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete vario' });
    }
};

module.exports = {
    getAllVarios,
    agregarVario,
    updateVario,
    removeVario,
    searchVarios
};
