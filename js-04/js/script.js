// for (let i = 0; i < 3; i = i + 1) {
//   console.log(i);
// }

// for (let i = 0; i < 3; i++) {
//   console.log(i);
// }

// ---

// let i = 0;

// while (i < 3) {
//   console.log(i);
//   i++; // contador
// }

// let j = 0;

// for (; j < 3; ) {
//   console.log(j);
//   j++;
// }

// ---

// for (let i = 5; i <= 30; i += 5) {
//   console.log(i);
// }

// for (let i = 10; i >= 1; i--) {
//   console.log(i);
// }

// for (let i = 1; i <= 11; i++) {
//   if (i % 2 == 0) {
//     console.log(i);
//   }
// }

// 2, 4, 6, 8, 10

// for (let i = 0; i < 10; i++) {
//   //   if (i < 5) {
//   //     console.log(i);
//   //   }

//   if (i >= 5) {
//     break;
//   }

//   console.log(i);
// }

// menores a 5

// for (let i = 0; i <= 11; i++) {
//   if (i % 2 == 0) {
//     continue;
//   }

//   console.log(i);
// }

// let i = 0;

// while (i <= 11) {
//   i++; // contador

//   if (i % 2 == 0) {
//     continue;
//   }

//   console.log(i);
// }

// ---

let opcion;

while (true) {
  opcion = prompt("Ingrese la opción: (0 para salir) ");

  if (opcion == 1) {
    console.log("Saldos");
  } else if (opcion == 2 || opcion == 3) {
    console.log("Tarjetas");
  } else if (opcion == 0) {
    break;
  } else {
    console.log("No se reconoce la opción");
  }
}
