class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
    mostrarInfo() {
        console.log(`Producto: '${this.nombre}', Precio: '${this.precio}'€`);
    }
}
const miPortatil = new Producto("Portátil Lenovo ThinkPad", 850.50);
miPortatil.mostrarInfo();