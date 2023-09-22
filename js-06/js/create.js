// Objeto literal
const persona = {
  nombre: "Juan",
  apellido: "Perez",
  "nombre completo": "Juan Perez",
};

const persona4 = Object.create(persona);
persona4.dni = 98765432;
console.log(persona4.nombre);

// console.log(persona.nombre);
// console.log(persona["nombre completo"]);

// Función constructora
// function Persona(nombre, apellido, edad) {
//   this.nombre = nombre;
//   this.apellido = apellido;
//   this.edad = edad;
// }

// const persona1 = new Persona("Juan", "Perez", 20);
// const persona2 = new Persona("Maria", "Garcia", 21);

// console.log(persona2.nombre);
// persona2.dni = 98765432;

// const persona3 = new Object();
// persona3.nombre = "Pedro";
// persona3.edad = 30;
