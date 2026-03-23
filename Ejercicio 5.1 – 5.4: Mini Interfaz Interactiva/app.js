const botonColor = document.querySelector('#cambiarColorBtn');
const botonCrear = document.querySelector('#crearParrafoBtn');
const botonEliminar = document.querySelector('#eliminarParrafoBtn');
const caja = document.querySelector('#caja');
const contenedor = document.querySelector('#contenedor-dinamico');

let contador = 0;

botonColor.addEventListener('click', () => {
    caja.textContent = "¡Clickeado!";
    caja.classList.toggle('resaltado');
});

botonCrear.addEventListener('click', () => {
    contador++;
    
    const nuevoP = document.createElement("p");
    nuevoP.textContent = "Párrafo " + contador + " creado dinámicamente";
    
    nuevoP.id = "parrafo" + contador;
    if (contador === 1) {
        nuevoP.style.width = "300px"; 
        nuevoP.style.backgroundColor = "lightgray";
        nuevoP.addEventListener('click', () => {
            nuevoP.style.backgroundColor = "salmon";
            nuevoP.style.color = "white";
        });
    }
    contenedor.appendChild(nuevoP);
});

botonEliminar.addEventListener('click', () => {
    const numero = prompt("¿Qué número de párrafo quieres eliminar?");
    if (numero) {
        const elementoABorrar = document.getElementById("parrafo" + numero);
        
        if (elementoABorrar) {
            elementoABorrar.remove();
        }
    }
});