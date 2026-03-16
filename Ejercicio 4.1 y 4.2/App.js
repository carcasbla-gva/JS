// Ejercicio 4.1 - 4.2: Resumen de Película

const pelicula = {
    titulo: "El Señor de los Anillos: La Comunidad del Anillo",
    director: "Peter Jackson",
    año: 2001
};

const { titulo, director, año } = pelicula;

const resumen = `${titulo}, dirigida por ${director}, se estrenó en el año ${año}.`;

console.log(resumen);
