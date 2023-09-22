// const persona = {
//   nombre: "Juan",
//   apellido: "Perez",
//   nombreCompleto: function () {
//     console.log(`${persona.nombre} ${persona.apellido}`);
//   },
// };

// persona.nombreCompleto();

// const user1 = {
//   nombre: "Juan",
//   apellido: "Perez",
//   //   nombreCompleto: function () {
//   //     console.log(`${this.nombre} ${this.apellido}`);
//   //   },
//   nombreCompleto(texto) {
//     console.log(`${texto} ${this.nombre} ${this.apellido}`);
//   },
// };

// // user1.nombreCompleto("Hola");

// for (const key in user1) {
//   //   console.log(typeof user1[key]);
//   if (user1.hasOwnProperty(key) && typeof user1[key] != "function") {
//     console.log(key, user1[key]);
//   }
// }

// ---

function Persona(nombre, apellido) {
  this.nombre = nombre;
  this.apellido = apellido;
  this.admin = false;

  //   this.setAdmin = function () {
  //     this.admin = true;
  //   };
}

Persona.prototype.setAdmin = function () {
  this.admin = true;
};

const persona = new Persona("Juan", "Perez");
// persona.setAdmin();

const persona2 = new Persona("Maria", "Garcia");
persona2.setAdmin();
