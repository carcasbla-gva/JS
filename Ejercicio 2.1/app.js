// Ejercicio 2.1: Calificación del Estudiante

const nota = 8.5;


if (nota >= 0 && nota < 5) {
  console.log("Suspenso");
} else if (nota >= 5 && nota < 7) {
  console.log("Aprobado");
} else if (nota >= 7 && nota < 9) {
  console.log("Notable");
} else if (nota >= 9 && nota <= 10) {
  console.log("Sobresaliente");
} else {
  console.log("Error: La nota debe ser un valor numérico entre 0 y 10.");
}
