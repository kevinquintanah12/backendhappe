const { Op } = require('sequelize');
const { Sequelize } = require('sequelize');
const Servicios = require('../models/servicios');  // Ajusta la ruta según tu estructura de archivos
const Categoria = require('../models/categoria');  // Ajusta la ruta según tu estructura de archivos

// @desc    All Services
const getAllServices = async (req, res) => {
    try {
        const services = await Servicios.findAll({});
        res.status(200).json(services);
    } catch (error) {
        console.error('Error retrieving services:', error); // Imprime el error completo en la consola
        res.status(500).json({ error: 'Failed to retrieve services' });
    }
};

const agregarServicio = async (req, res) => {
    const {
        codigo,
        nombre,
        descripcion,
        precio,
        precioCompra,
        ganancia
    } = req.body;

    try {
        // Intenta crear un nuevo servicio usando el modelo Servicios
        const nuevoServicio = await Servicios.create({
            codigo,
            nombre,
            descripcion,
            precio,
            precioCompra,
            ganancia
        });

        // Si se crea correctamente, mostramos un mensaje en la consola
        console.log('Servicio agregado correctamente:', nuevoServicio.toJSON());

        // Respondemos con éxito y el nuevo servicio creado
        res.status(201).json(nuevoServicio);
    } catch (error) {
        // En caso de error, capturamos el error
        console.error('Error al agregar servicio:', error);

        // Respondemos con un mensaje de error adecuado
        res.status(500).json({ error: 'Failed to add servicio', details: error.message });
    }
};


const searchServices = async (req, res) => {
    const { query } = req.query;

    try {
        const services = await Servicios.findAll({
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

        res.status(200).json(services);
    } catch (error) {
        console.error('Error searching services:', error);
        res.status(500).json({ error: 'Failed to search services', details: error.message });
    }
};

// @route   PUT /api/service/update-service
// @desc    Update Service
const updateService = async (req, res) => {
    const { id, codigo, nombre, descripcion, precio, precioCompra, ganancia } = req.body;

    try {
        const updatedService = await Servicios.update({
            codigo,
            nombre,
            descripcion,
            precio,
            precioCompra,
            ganancia
        }, {
            where: { id }
        });

        if (updatedService[0] === 0) {
            return res.status(404).json({ error: 'Service not found' });
        }

        res.status(200).json({ message: 'Service updated successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to update service' });
    }
};

// @route   DELETE /api/service/remove-service/:serviceId
// @desc    Remove Service
const removeService = async (req, res) => {
    const { serviceId } = req.params;

    try {
        const service = await Servicios.findByPk(serviceId);

        if (!service) {
            return res.status(404).json({ error: 'Service not found' });
        }

        await service.destroy();
        res.status(200).json({ message: 'Service deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete service' });
    }
};

module.exports = {
    getAllServices,
    agregarServicio,
    updateService,
    removeService,
    searchServices
};
