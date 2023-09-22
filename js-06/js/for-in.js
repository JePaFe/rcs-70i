const auto = {
  marca: "Fiat",
  modelo: "Cronos",
  puertas: 3,
};

// console.log("Marca", auto.marca);
// console.log("Modelo", auto.modelo);
// console.log("Puertas", auto.puertas);

for (const key in auto) {
  if (auto.hasOwnProperty(key)) {
    console.log(key, auto[key]);
  }
}

// const keys = Object.keys(auto);

// for (let i = 0; i < keys.length; i++) {
//   // console.log(keys[i], auto[keys[i]]);
//   console.log(i);
//   const key = keys[i];
//   console.log(key);
//   console.log(auto[key]);
// }
