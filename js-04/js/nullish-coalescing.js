// Nullish Coalescing

let num = 0; // prompt("Ingrese un numero: ");

console.log(typeof num, num);

// if (num == undefined || num == null) {
//   num = 10;
// }

num = num ?? 10;
console.log(num);

num = num || 10;
console.log(num);

// console.log(Boolean(0));

// let result = num / 2;
// console.log(result);
