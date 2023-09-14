let opcion;

do {
  opcion = prompt("Ingrese la opción: (0 para salir) ");

  if (opcion == 1) {
    console.log("Saldos");
  } else if (opcion == 2 || opcion == 3) {
    console.log("Tarjetas");
  } else if (opcion == 0) {
    console.log("Salir");
  } else {
    console.log("No se reconoce la opción");
  }
} while (opcion != 0);
