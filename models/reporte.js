const { DataTypes } = require('sequelize');
const sequelize = require('../db/db');

const Reporte = sequelize.define('Reporte', {
    idReporte: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    fecha: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    tipo: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    detalle: {
        type: DataTypes.TEXT,
    },
}, {
    timestamps: false,
    tableName: 'reporte'
});

module.exports = Reporte;
