const productos = [
  { id: 1, nombre: "Producto 1", oferta: false },
  { id: 5, nombre: "Producto 5", oferta: true },
  { id: 7, nombre: "Producto 7", oferta: false },
  { id: 12, nombre: "Producto 12", oferta: true },
];

// productos.forEach(function (producto) {
//   console.log(producto.nombre);
// });

// const productosConPrecio = productos.map(function (producto) {
//   producto.precio = 1000;
//   return producto;
// });

const numeros = [2, 3, 4, 5];

const cuadrados = numeros.map(function (numero) {
  return numero * numero;
});

const nums = numeros.map((numero) => numero);
