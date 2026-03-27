class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }

    mostrarInfo() {
        console.log(`Producto: '${this.nombre}', Precio: '${this.precio}'€`);
    }
}


class Alimento extends Producto {
    constructor(nombre, precio, fechaCaducidad) {
        super(nombre, precio); 
        this.fechaCaducidad = fechaCaducidad;
    }

    mostrarInfo() {
    super.mostrarInfo(); 
        console.log(`Consumir preferentemente antes de: '${this.fechaCaducidad}'`);
    }
}

const miDesayuno = new Alimento("Yogur Natural", 1.20, "25/04/2026");
miDesayuno.mostrarInfo();