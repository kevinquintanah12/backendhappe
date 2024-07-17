const { DataTypes } = require('sequelize');
const sequelize = require('../db/db');
const Categoria = require('./categoria');

const Diseño = sequelize.define('Diseño', {
    idDiseño: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nombre: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    descripcion: {
        type: DataTypes.TEXT,
    },
    precioVenta: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
    },
    categoria: {
        type: DataTypes.INTEGER,
        references: {
            model: Categoria,
            key: 'idCategoria',
        }
    },
    precioCompra: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
    },
    ganancia: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
    },
}, {
    timestamps: false,
    tableName: 'diseño'
});

module.exports = Diseño;
