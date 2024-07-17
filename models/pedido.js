const { DataTypes } = require('sequelize');
const sequelize = require('../db/db');
const Diseño = require('./diseño');

const Pedido = sequelize.define('Pedido', {
    idPedido: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    idDiseño: {
        type: DataTypes.INTEGER,
        references: {
            model: Diseño,
            key: 'idDiseño',
        }
    },
    detalles: {
        type: DataTypes.TEXT,
    },
    anticipo: {
        type: DataTypes.DECIMAL(10, 2),
    },
    resto: {
        type: DataTypes.DECIMAL(10, 2),
    },
    nombreCliente: {
        type: DataTypes.STRING(255),
    },
    telefono: {
        type: DataTypes.STRING(50),
    },
    correo: {
        type: DataTypes.STRING(255),
    },
    fechaEncargo: {
        type: DataTypes.DATE,
    },
    fechaEntrega: {
        type: DataTypes.DATE,
    },
}, {
    timestamps: false,
    tableName: 'pedido'
});

module.exports = Pedido;
