const { DataTypes } = require('sequelize');
const sequelize = require('../db/db');
const Categoria = require('./categoria');

const Servicios = sequelize.define('Servicios', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    codigo: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    nombre: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    descripcion: {
        type: DataTypes.TEXT,
    },
    precio: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: true,
    },
    precioCompra: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: true, // Puede ser nulo
    },
    ganancia: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: true, // Puede ser nulo
    },
}, {
    timestamps: true,
    tableName: '"Servicios"'
});

module.exports = Servicios;
