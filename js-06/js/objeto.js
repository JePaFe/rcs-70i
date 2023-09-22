// let marca = "Ford";
// let modelo = "Ranger";
// let color = "Amarillo";

// console.log(marca);

const auto = {
  marca: "Ford",
  modelo: "Ranger",
  color: "Amarillo",
  encendido: true,
  ruedas: 4,
};

// console.log(auto.marca);

// auto.encendido = false;
// console.log(auto["encendido"]);

const noticia = {
  titulo: "Noticia 1",
  resumen: "Texto ...",
  categoria: {
    id: 1,
    nombre: "Categoría 1",
  },
};

noticia.categoria.nombre = "Categoría 2";

console.log(noticia.categoria.nombre);

noticia.etiqueta = "Deporte";

delete noticia.categoria;

noticia.cuerpo = null;
