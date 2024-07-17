const { DataTypes, Model } = require('sequelize');
const sequelize = require('../db/db');

class DetalleVenta extends Model {
  static associate(models) {
    // Asociaciones con otras tablas si es necesario
    DetalleVenta.belongsTo(models.Ventas, { foreignKey: 'idventa', as: 'venta' });
    DetalleVenta.belongsTo(models.Productos, { foreignKey: 'idproducto', as: 'producto' });
    DetalleVenta.belongsTo(models.Varios, { foreignKey: 'idvarios', as: 'varios' });
    DetalleVenta.belongsTo(models.Servicios, { foreignKey: 'idservicio', as: 'servicio' });
    DetalleVenta.belongsTo(models.Reportes, { foreignKey: 'idreporte', as: 'reporte' });
  }
}

DetalleVenta.init({
  idventa: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'idventa' // Ajusta según el nombre de la columna en tu base de datos
  },
  idproducto: {
    type: DataTypes.INTEGER,
    allowNull: true,
    field: 'idproducto' // Ajusta según el nombre de la columna en tu base de datos
  },
  idservicio: {
    type: DataTypes.INTEGER,
    allowNull: true,
    field: 'idservicio' // Ajusta según el nombre de la columna en tu base de datos
  },
  idvarios: {
    type: DataTypes.INTEGER,
    allowNull: true,
    field: 'idvarios' // Ajusta según el nombre de la columna en tu base de datos
  },
  idreporte: {
    type: DataTypes.INTEGER,
    allowNull: true,
    field: 'idreporte' // Ajusta según el nombre de la columna en tu base de datos
  },
  cantidad: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'cantidad' // Ajusta según el nombre de la columna en tu base de datos
  },
  precioUnitario: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
    field: 'precioUnitario' // Ajusta según el nombre de la columna en tu base de datos
  }
}, {
  sequelize,
  modelName: 'DetalleVenta',
  tableName: 'detalleventa', // Nombre de la tabla en tu base de datos
  timestamps: true
});

module.exports = DetalleVenta;
