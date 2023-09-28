document.write("<p>Opción 1: agregar tarea</p>");
document.write("<p>Opción 2: borrar tarea</p>");
document.write("<p>Cancelar para salir</p>");

// let opcion = prompt("Ingrese la opción: ");
// console.log(opcion, typeof opcion, Number(opcion), parseInt(opcion));

let tareas = ["Tarea 1", "Tarea 2", "Tarea 3", "Tarea 2", "Tarea 2"];

let opcion;

do {
  opcion = prompt("Ingrese la opción: ");
  console.log("opcion", opcion);

//   if (opcion == 1) {
//     console.log("Agregar tarea");
//     let tarea = prompt("Ingresar una tarea: ");
//     if (tarea) {
//       tareas.push(tarea);
//     }
//   } else if (opcion == 2) {
//     console.log("Borrar tarea");
//     console.log("tareas", tareas);
//     let tarea = prompt("Ingresar una tarea a borrar: ");

//     // const index = tareas.indexOf(tarea);
//     // console.log("index", index);

//     // if (index >= 0) {
//     //   tareas.splice(index, 1);
//     // }

//     tareas = tareas.filter((item) => item != tarea);

//     console.log("tareas", tareas);
//   }

  let tarea;

  switch (opcion) {
    case 1:
      console.log("Agregar tarea");
      tarea = prompt("Ingresar una tarea: ");
      if (tarea) {
        tareas.push(tarea);
      }
      break;
    case 2:
      console.log("Borrar tarea");
      console.log("tareas", tareas);
      tarea = prompt("Ingresar una tarea a borrar: ");

      // const index = tareas.indexOf(tarea);
      // console.log("index", index);

      // if (index >= 0) {
      //   tareas.splice(index, 1);
      // }

      tareas = tareas.filter((item) => item != tarea);

      console.log("tareas", tareas);
      break;
  }
  
} while (opcion != null);

console.log("tareas", tareas);
