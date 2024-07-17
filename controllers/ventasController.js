const Ventas = require('../models/ventas');
const DetalleVenta = require('../models/detalleventa');
const { imprimirTicket, abrirCajaRegistradora } = require('../utils/printer');

async function realizarVenta(req, res) {
    try {
        const { fecha, hora, totalVenta, montoRecibido, cambio, detalles } = req.body;

        // Crear la venta principal
        const nuevaVenta = await Ventas.create({
            fecha,
            hora,
            totalVenta,
            montoRecibido,
            cambio
        });

        // Guardar detalles de la venta (productos, servicios, varios, etc.)
        for (const detalle of detalles) {
            await DetalleVenta.create({
                idventa: nuevaVenta.id, // Asignar el idventa de la nuevaVenta
                idproducto: detalle.idProducto,
                idservicio: detalle.idServicio,
                idvarios: detalle.idVarios,
                idreporte: detalle.idReporte,
                cantidad: detalle.cantidad,
                precioUnitario: detalle.precioUnitario,
                subtotal: detalle.subtotal
            });
        }

        // Realizar acciones adicionales como imprimir ticket y abrir caja
        await imprimirTicket(nuevaVenta, detalles);
        await abrirCajaRegistradora();

        res.status(200).json({ message: 'Venta realizada con éxito' });
    } catch (error) {
        console.error('Error al realizar la venta:', error);
        res.status(500).json({ error: 'Error interno al realizar la venta' });
    }
}

module.exports = {
    realizarVenta
};
