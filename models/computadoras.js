const { DataTypes } = require('sequelize');
const sequelize = require('../db/db');
const Servicios = require('./servicios');

const Computadoras = sequelize.define('Computadoras', {
    idComputadora: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nombre: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    idServicio: {
        type: DataTypes.INTEGER,
        references: {
            model: Servicios,
            key: 'idServicio',
        }
    },
}, {
    timestamps: false,
    tableName: 'computadoras'
});

module.exports = Computadoras;
