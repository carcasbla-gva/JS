// Ejercicio 3.1: Función de Cálculo de IVA

const calcularIVA = (precio) => {
    const iva = precio * 0.21;
    return precio + iva;
};
const precioFinal = calcularIVA(100);
    console.log(precioFinal);