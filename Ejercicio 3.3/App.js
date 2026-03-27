// Ejercicio 3.3: Objeto Libro

const libro = {
    titulo: "El Principito",
    autor: "Antoine de Saint-Exupéry",
    paginas: 96,

mostrarResumen() {
    console.log(`El libro '${this.titulo}' fue escrito por '${this.autor}' y tiene '${this.paginas}' páginas.`);
}
}

libro.mostrarResumen();