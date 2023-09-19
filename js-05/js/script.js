function sumar(num1, num2) {
  return num1 + num2;
}

function restar(num1, num2) {
  return num1 - num2;
}

// function calculadora(num1, num2, operacion) {
//   if (operacion == "+") {
//     return num1 + num2;
//   } else if (operacion == "-") {
//     return num1 - num2;
//   }
// }

function calculadora(num1, num2, operacion) {
  return operacion(num1, num2);
}

let resultado;

resultado = calculadora(2, 3, sumar);
console.log(resultado);

resultado = calculadora(6, 2, restar);
console.log(resultado);

// ---

// const saludarConsole = function (nombre) {
//   if (nombre) {
//     console.log("Hola " + nombre);
//   }
// };

// const saludarAlert = function (nombre) {
//   if (nombre) {
//     alert("Hola " + nombre);
//   }
// };

// const saludar = function (nombre = "Juan", callback = console.log) {
//   if ("Juan") {
//     console.log("Hola " + "Juan");
//   }
// };

// ---

// const write = function (texto) {
//   document.write(texto);
// };

// const saludar = function (nombre, callback) {
//   if (nombre) {
//     callback("Hola " + nombre);
//   }
// };

// saludar("Juan", console.log);
// // saludar("Juan", alert);
// saludar("Juan", write);
