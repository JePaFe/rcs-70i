// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);

// let i = 1;

// while (i <= 1000) {
//   console.log(i);
//   //   i = i + 1;
//   //   i += 1;
//   i++; // contador
// }

let opcion = prompt("Ingrese la opción: (0 para salir) ");

while (opcion != 0) {
  //   if (opcion == 1) {
  //     console.log("saldos");
  //   } else if (opcion == 2 || opcion == 3) {
  //     console.log("tarjetas");
  //   } else {
  //     console.log("No se reconoce la opción");
  //   }

  switch (opcion) {
    case 1:
      console.log("saldos");
      break;
    case 2:
    case 3:
      console.log("tarjetas");
      break;
    default:
      console.log("No se reconoce la opción");
  }

  opcion = prompt("Ingrese la opción: (0 para salir) ");
}
