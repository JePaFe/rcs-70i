let admin = true;

let mensaje = "Hola ";

// if (admin == true) {
//   mensaje = mensaje + "Admin";
// } else {
//   mensaje = mensaje + "User";
// }

// if (admin) {
//   mensaje += "Admin";
// } else {
//   mensaje += "User";
// }

//     condición ?  true   : false
mensaje += admin ? "Admin" : "User";

console.log(mensaje);
