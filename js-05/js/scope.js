let num = 5;

// function mensaje() {
//   const num = 7;
//   let nombre = "Juan";
//   console.log("En la función num vale: " + num);
//   console.log("En la función nombre vale: " + nombre);
// }

// mensaje();

// console.log("En el script num vale: " + num);
// console.log("En la script nombre vale: " + nombre);

const mensaje = function (texto) {
  console.log(texto);
  texto = "Texto en la función";
  console.log(texto);

  console.log("En la función num vale: " + num);
};

mensaje("Hola función");
console.log("En el script num vale: " + num);
console.log("En la script texto vale: " + texto);
