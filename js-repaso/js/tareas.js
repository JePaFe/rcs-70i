// const tarea1 = "Tarea 1";
// const tarea2 = "Tarea 2";

// const tareas = ["Tarea 1"];

// tareas[1] = "Tarea 2";
// tareas.push("Tarea 3");

// ---

const tareas = [];

let tarea = prompt("Ingresar una tarea: ");
// '', null, undefined, 0

// console.log(tarea == "", tarea == null, Boolean(tarea));
// if (tarea != "") {
// if (tarea != null) {
// if (tarea != "" && tarea != null && tarea.length > 0) {
// if (tarea != null && tarea.length > 0) {
// if (tarea) {
// //   console.log(tarea);
//   tareas.push(tarea);
// }

// tareas.push(tarea);

while (tarea != null) {
  if (tarea) {
    tareas.push(tarea);
  }

  tarea = prompt("Ingresar una tarea: ");
}

console.log(tareas);
