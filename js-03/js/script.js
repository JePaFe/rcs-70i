const nota = -2;

// 1 al 6 desaprobó
// 7 al 9 aprobó
// 10 Sobresaliente

// switch (nota) {
//   case 1:
//   case 2:
//   case 3:
//   case 4:
//   case 5:
//   case 6:
//     console.log("desaprobó");
//     break;
//   case 7:
//   case 8:
//   case 9:
//     console.log("aprobó");
//     break;
//   case 10:
//     console.log("Sobresaliente");
//     break;
//   default:
//     console.log("Nota incorrecta");
// }

if (nota >= 1 && nota <= 6) {
  console.log("desaprobó");
} else if (nota >= 7 && nota <= 9) {
  console.log("aprobó");
} else if (nota == 10) {
  console.log("Sobresaliente");
} else {
  console.log("Nota incorrecta");
}
