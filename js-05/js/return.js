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

// const saludarAPI = function (nombre) {
//   if (nombre) {
//     API("Hola " + nombre);
//   }
// };

const saludar = function (nombre) {
  if (nombre) {
    const texto = `Hola ${nombre}`;
    return texto;
  }
};

let mensaje = saludar("Juan");

console.log(mensaje);
alert(mensaje);
document.write(mensaje);

// saludar("Maria");
