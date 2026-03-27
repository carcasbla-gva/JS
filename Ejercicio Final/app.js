
class Tarea {
    constructor(texto) {
        this.texto = texto;
    }
}

class GestorTareas {
    constructor() {
        // Seleccionamos los elementos del DOM (Punto 5)
        this.input = document.querySelector('#nueva-tarea-input');
        this.boton = document.querySelector('#agregar-tarea-btn');
        this.lista = document.querySelector('#lista-tareas');
        
        this.tareas = [];

        this.iniciarEventos();
    }

    iniciarEventos() {
        this.boton.addEventListener('click', () => {
            this.agregarNuevaTarea();
        });
    }

    agregarNuevaTarea() {
        const texto = this.input.value;

        if (texto !== "") {
            const nuevaTarea = new Tarea(texto);
            this.tareas.push(nuevaTarea);

            const li = document.createElement('li');
            li.textContent = nuevaTarea.texto;

            li.addEventListener('click', (event) => {
                event.target.classList.toggle('completada')
            });

            this.lista.appendChild(li);

            this.input.value = "";
        }
    }
}
const miAplicacion = new GestorTareas();