// let num;

// num = 5;

// console.log(num);

// ---

// Función declarada
// function saludar(nombre) {
//   console.log("Hola " + nombre);
// }

// función anónima
// function () {}

// Función expresada
const saludar = function (nombre) {
  //   console.log(Boolean(nombre), nombre != undefined, nombre.length);
  // False: 0, null, undefined, ''
  if (nombre) {
    console.log("Hola " + nombre);
  }
};

saludar();
saludar("");
saludar("Juan");
// saludar("Maria");
// saludar("Ana");
// saludar("Pedro");

// ---

const saludarAlert = function (nombre) {
  if (nombre) {
    alert("Hola " + nombre);
  }
};

saludarAlert();
saludarAlert("Juan");
