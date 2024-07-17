const fs = require('fs');
const util = require('util');
const exec = util.promisify(require('child_process').exec);
const ticketTemplate = require('../templates/ticketTemplate'); // Archivo con el diseño del ticket

async function imprimirTicket(venta, detalles) {
    const contenidoTicket = ticketTemplate.generarTicket(venta, detalles);
    const fileName = 'ticket.txt';

    try {
        // Guardar el contenido del ticket en un archivo temporal
        fs.writeFileSync(fileName, contenidoTicket);

        // Comando para imprimir usando lp (Linux)
        const printerCommand = `lp -d SEAFON -o raw -o page-top=5 -o page-left=5 -o media=Custom.55x3276mm ${fileName}`;

        // Ejecutar el comando de impresión
        const { stdout, stderr } = await exec(printerCommand);
        
        if (stderr) {
            console.error('Error al imprimir:', stderr);
        } else {
            console.log('Ticket impreso correctamente.');
            console.log(stdout);
        }

        // Agregar un pequeño retraso antes de abrir la caja registradora
        await new Promise(resolve => setTimeout(resolve, 1000));

        // Abrir la caja registradora después de imprimir el ticket
        await abrirCajaRegistradora();
    } catch (error) {
        console.error('Error al imprimir el ticket:', error);
    } finally {
        // Eliminar el archivo temporal después de imprimir
        fs.unlinkSync(fileName);
    }
}

async function abrirCajaRegistradora() {
    try {
        // Comando para abrir la caja registradora
        const abrirCajaCommand = 'sudo sh -c \'echo -ne "\\x1B\\x70\\x00\\xA0\\x50" > /dev/usb/lp0\'';
        
        const { stdout, stderr } = await exec(abrirCajaCommand);
        
        if (stderr) {
            console.error('Error al abrir la caja registradora:', stderr);
        } else {
            console.log('Caja registradora abierta correctamente.');
            console.log(stdout);
        }
    } catch (error) {
        console.error('Error al abrir la caja registradora:', error);
    }
}
    // Exportar la función imprimirTicket y abrirCajaRegistradora para su uso en otros módulos
    module.exports = { imprimirTicket, abrirCajaRegistradora };
