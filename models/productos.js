// productos.js
const { DataTypes } = require('sequelize');
const sequelize = require('../db/db');
const Categoria = require('./categoria');

const Productos = sequelize.define('Productos', {
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
    categoria: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Categoria,
            key: 'id',
        }
    },
    precioVenta: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
    },
    precioCompra: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: true,
    },
    stock: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    presentacion: {
        type: DataTypes.STRING(255),
    },
    ganancia: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: true,
    },
}, {
    timestamps: true,
    tableName: '"Productos"'
});

// Definición de la relación
Productos.belongsTo(Categoria, {
    foreignKey: 'categoria',
    as: 'categoriaId' // Opcional, define un alias para la relación
});

module.exports = Productos;
