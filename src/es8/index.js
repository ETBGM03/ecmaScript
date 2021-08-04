const data = {
  frontend: "Esteban",
  backend: "Juan",
  database: "Juan",
  api: "Daniel",
};
let arr = Object.entries(data);
console.log(arr);
console.log(arr.length);

const data2 = {
  frontend: "Esteban",
  backend: "Juan",
  database: "Juan",
  api: "Daniel",
  age: 19,
};

let values = Object.values(data2);
console.log(values);
console.log(values.length);

let str = "hola";
console.log(str.padStart(10, "hi"));

//async and await
const hola = () => {
  return new Promise((resolve, reject) => {
    true
      ? setTimeout(() => resolve("Hola mundo"), 1000)
      : reject(new Error("Error"));
  });
};
// const holaAsync = async () => {
//   let saludar = await hola();
//   console.log(saludar);
// };
// holaAsync();

//de esta manera lo hacemos correctamente para el manejo de async y await
const asyncAndAwait = async () => {
  try {
    let saludar = await hola();
    console.log(saludar);
  } catch (err) {
    console.log(err);
  }
};
asyncAndAwait();
