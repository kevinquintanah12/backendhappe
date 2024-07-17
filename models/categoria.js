const { DataTypes } = require('sequelize');
const sequelize = require('../db/db');

const Categoria = sequelize.define('Categoria', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nombre: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
}, {
    sequelize,
    modelName: 'Categoria',
    tableName: '"Categoria"', // Ensure this matches your actual table name
    timestamps: true,
});

module.exports = Categoria;
