// const meses = ["Enero", "Febrero", "Marzo", "Abril"];

// const result = meses.includes("Febrero");

// const buscar = function (mes) {
//   if (mes.indexOf("bre") >= 0) {
//     return true;
//   } else {
//     return false;
//   }
// };

// const buscar = function (mes) {
//   if (mes.indexOf("bre") >= 0) {
//     return true;
//   }

//   return false;
// };

// const buscar = function (mes) {
//   return mes.indexOf("bre") >= 0;
// };

// const buscar = (mes) => mes.indexOf("bre") >= 0;

// const mes = meses.find((mes) => mes.indexOf("rz") >= 0);

// ---

// const texto = "Hola mundo";

// // for (let i = 0; i < texto.length; i++) {
// //   console.log(texto[i]);
// // }

// const exist = texto.includes("la mu");
// const index = texto.indexOf("la mu");

// ---

// const cuadrado = num => num * num;

// ---

const productos = [
  { id: 1, nombre: "Producto 1", oferta: false },
  { id: 5, nombre: "Producto 5", oferta: true },
  { id: 7, nombre: "Producto 7", oferta: false },
  { id: 12, nombre: "Producto 12", oferta: true },
];

// function oferta(item) {
//   if (item.oferta == true && item.id == 12) {
//     return true;
//   } else {
//     return false;
//   }
// }

// const oferta = function (item) {
//   if (item.oferta == true && item.id == 12) {
//     return true;
//   }

//   return false;
// };

// const oferta = function (item) {
//   return item.oferta == true && item.id == 12;
// };

// const oferta = item => item.oferta == true && item.id == 12;
// const producto = productos.find(oferta);

const oferta = (item) => item.oferta && item.id == 12;
const producto = productos.find((item) => item.oferta && item.id == 12);
