// Arrow function
// const saludar = function (nombre) {
//   return `Hola ${nombre}`;
// };

// const saludar = (nombre) => {
//   return `Hola ${nombre}`;
// };

// const saludar = nombre => `Hola ${nombre}`;

// ---

// Function declarada
// function restar(num1, num2) {
//   let resta = num1 - num2;
//   console.log(resta);
// }

// Function expresada
// const restar = function (num1, num2) {
//   let resta = num1 - num2;
//   console.log(resta);
// }

// const restar = (num1, num2) => {
//   let resta = num1 - num2;
//   console.log(resta);
// };

// const restar = (num1, num2) => console.log(num1 - num2);

// const restar = (num1, num2) => num1 - num2;
// const resultado = restar(10, 7);
// console.log(resultado);

// ---

// function mensaje() {
//   return "Una mensaje";
// }

// const mensaje = function () {
//   return "Una mensaje";
// };

// const mensaje = () => {
//   return "Una mensaje";
// };

// const mensaje = () => "Una mensaje";
// console.log(mensaje());

// ---

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/pow

function pow(x, y) {
  console.log(typeof x, typeof y);
  if (typeof x == "number" && typeof y == "number") {
    return x ** y;
  } else {
    return "Los parámetros x e y deben ser números";
  }
}

// function pow(x, y) {
//   if (typeof x == "number" && typeof y == "number") {
//     return x ** y;
//   }
//   return "Los parámetros x e y deben ser números";
// }

// const pow = (x, y) => {
//   if (typeof x == "number" && typeof y == "number") {
//     return x ** y;
//   }
//   return "Los parámetros x e y deben ser números";
// };

// const pow = (x, y) =>
//   typeof x == "number" && typeof y == "number"
//     ? x ** y
//     : "Los parámetros x e y deben ser números";

console.log(pow(3, 3));
console.log(pow(null, "D"));

// let mensaje;
// let admin = false;

// // if (admin == true) {
// //   mensaje = "Hola admin";
// // } else {
// //   mensaje = "Hola user";
// // }

// mensaje = admin ? "Hola admin" : "Hola user";
// console.log(mensaje);
