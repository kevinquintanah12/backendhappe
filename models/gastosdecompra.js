const { DataTypes } = require('sequelize');
const sequelize = require('../db/db');

const GastosDeCompra = sequelize.define('GastosDeCompra', {
    idGastoCompra: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    totalCompra: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
    },
    descripcion: {
        type: DataTypes.TEXT,
    },
}, {
    timestamps: false,
    tableName: 'gastosdecompra'
});

module.exports = GastosDeCompra;
