'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('detalleventa', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      idventa: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Ventas', // Nombre de la tabla referenciada
          key: 'id' // Clave primaria de la tabla referenciada
        }
      },
      idproducto: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      idservicio: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      idvarios: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      idreporte: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      cantidad: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      precioUnitario: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('detalleventa');
  }
};
