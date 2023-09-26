// const nombres = ["Juan", "Ana", "Pedro", "Maria"];

// nombres.sort().reverse();

const numeros = [3, 10, 4, 1, 20, 2, 30];

// function compare(a, b) {
//   if (a < b) {
//     return -1;
//   } else if (a > b) {
//     return 1;
//   }
//   // a must be equal to b
//   return 0;
// }

numeros.sort((a, b) => a - b);

// numeros.sort((a, b) => b - a);
// numeros.sort((a, b) => a - b).reverse();

// numeros.reverse();
