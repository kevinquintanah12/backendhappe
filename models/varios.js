const { DataTypes } = require('sequelize');
const sequelize = require('../db/db');

const Varios = sequelize.define('Varios', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    codigo: {
        type: DataTypes.STRING(50),
        allowNull: true,
    },
    nombre: {
        type: DataTypes.STRING(255),
        allowNull: true,
    },
    descripcion: {
        type: DataTypes.TEXT,
        allowNull: true,

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
    tableName: '"Varios"'
});

module.exports = Varios;
