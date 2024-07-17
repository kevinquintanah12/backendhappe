'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('detalleventa', {
      idDetalle: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      idVenta: {
        type: Sequelize.INTEGER,
        references: {
          model: 'ventas', // nombre de la tabla
          key: 'idVenta',
        },
        allowNull: false,
      },
      idProducto: {
        type: Sequelize.INTEGER,
        references: {
          model: 'productos',
          key: 'idProducto',
        },
        allowNull: true,
      },
      idServicio: {
        type: Sequelize.INTEGER,
        references: {
          model: 'servicios',
          key: 'idServicio',
        },
        allowNull: true,
      },
      idVarios: {
        type: Sequelize.INTEGER,
        references: {
          model: 'varios',
          key: 'id',
        },
        allowNull: true,
      },
      idReporte: {
        type: Sequelize.INTEGER,
        references: {
          model: 'reporte',
          key: 'idReporte',
        },
        allowNull: true,
      },
      montoRecibido: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: true,
      },
      cambio: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: true,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('detalleventa');
  }
};
