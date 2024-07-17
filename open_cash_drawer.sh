#!/bin/bash

# Ruta absoluta al dispositivo de la caja registradora
DEVICE_PATH="/dev/usb/lp0"

# Verificar si el dispositivo existe antes de intentar escribir en él
if [ -e "$DEVICE_PATH" ]; then
    # Comando para abrir la caja registradora
    echo -e "\x1B\x70\x30\x37\x79" | sudo tee "$DEVICE_PATH" > /dev/null
    echo "Caja registradora abierta correctamente en $DEVICE_PATH."
else
    echo "Error: El dispositivo $DEVICE_PATH no existe o no se puede acceder."
    exit 1
fi
