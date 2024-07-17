const { DataTypes } = require('sequelize');
const sequelize = require('../db/db');

const Ticket = sequelize.define('Ticket', {
    idTicket: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    detalle: {
        type: DataTypes.TEXT,
    },
}, {
    timestamps: false,
    tableName: 'ticket'
});

module.exports = Ticket;
