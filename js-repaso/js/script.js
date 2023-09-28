document.write("<p>Opción 1: agregar tarea</p>");
document.write("<p>Opción 2: borrar tarea</p>");
document.write("<p>Opción 3: completar tarea</p>");
document.write("<p>Cancelar para salir</p>");

let id = 1;

const tarea = {
  id: id,
  texto: "Tarea 1",
  completa: false,
};

// document.write(tarea.texto)

let tareas = [];
tareas.push(tarea);

tareas.push({
  id: ++id,
  completa: false,
  texto: "Tarea 2",
});

tareas.push({
  id: ++id,
  completa: false,
  texto: "Tarea 3",
});

// function crearTarea(id, texto) {
//   let tarea = null;

//   if (texto) {
//     tarea = {
//       id: id,
//       texto: texto,
//       completa: false,
//     };
//   }

//   return tarea;
// }

const crearTarea = (id, texto) => {
  let tarea = null;

  if (texto) {
    tarea = {
      id: id,
      texto: texto,
      completa: false,
    };
  }

  return tarea;
};

let opcion;

do {
  opcion = prompt("Ingrese la opción: ");
  console.log("opción", opcion);

  if (opcion == 1) {
    console.log("Agregar tarea");
    let textoPrompt = prompt("Ingresar una tarea: ");

    id = id + 1;
    const tarea = crearTarea(id, textoPrompt);
    console.log("tarea", tarea);

    if (tarea) {
      tareas.push(tarea);

      console.log("tareas", tareas);
    }

    // if (textoPrompt) {
    //   let tarea = {
    //     // id: (id = id + 1),
    //     // id: (id += 1),
    //     id: ++id,
    //     completa: false,
    //     texto: textoPrompt,
    //   };

    //   tareas.push(tarea);

    //   console.log("tareas", tareas);
    // }
  } else if (opcion == 2) {
    console.log("Borrar tarea");
    console.log("tareas", tareas);
    tareaId = prompt("Ingresar ID de la tarea a borrar: ");

    tareas = tareas.filter((item) => item.id != tareaId);

    console.log("tareas", tareas);
  } else if (opcion == 3) {
    console.log("Completar tarea");
    let tareaId = prompt("Ingresar ID de la tarea a completar: ");

    let tarea = tareas.find((item) => item.id == tareaId);
    tarea.completa = true;
    console.log("tarea", tarea);
  }
} while (opcion != null);
