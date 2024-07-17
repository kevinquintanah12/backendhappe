function generarTicket(venta, detalles) {
    return `
        === Ticket de Venta ===
        Fecha: ${venta.fecha} ${venta.hora}
        --------------------------
        Detalles de la Venta:
        --------------------------
        Total: ${venta.totalVenta}
        Monto Recibido: ${venta.montoRecibido}
        Cambio: ${venta.cambio}
        --------------------------
        Productos/Servicios:
        --------------------------
        ${detalles.map(detalle => `
            Nombre: ${detalle.nombre}
            Precio Unitario: ${detalle.precioUnitario}
            Cantidad: ${detalle.cantidad}
            Subtotal: ${detalle.precioUnitario * detalle.cantidad} USD
            --------------------------
        `).join('')}
        ==========================
        Gracias por su compra!
    `;
}

module.exports = {
    generarTicket
};
