const numeros = [5, 8, 2, 7];

// numeros[0] = 5;
// //                 1
// numeros[numeros.length] = 8;

// console.log(numeros.length);

// ---

numeros.push(9, 15);

// console.log(numeros);

// // console.log(numeros[5]);

// let num = numeros.pop();

// console.log(num);

let num = numeros.shift();
numeros.unshift(-4);

// console.log(num, numeros);

// i = 0
// numeros.length = 6
for (let i = 0; i < numeros.length; i++) {
  console.log(numeros[i]);
}
