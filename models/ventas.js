// En models/ventas.js
const { DataTypes } = require('sequelize');
const sequelize = require('../db/db');

const Ventas = sequelize.define('Ventas', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: 'id'
    },
    fecha: {
        type: DataTypes.DATE,
        allowNull: false,
        field: 'fecha'
    },
    hora: {
        type: DataTypes.TIME,
        allowNull: false,
        field: 'hora'
    },
    totalVenta: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        field: 'totalVenta'
    },
    montoRecibido: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        field: 'montoRecibido'
    },
    cambio: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        field: 'cambio'
    },
}, {
    timestamps: true,
    tableName: 'Ventas' // Sin comillas dobles aquí
});

module.exports = Ventas;
