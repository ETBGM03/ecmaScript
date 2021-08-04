//operador de reposo
const data = {
  name: "es9",
  description: "ECMAScript 9: JavaScript Next",
};

let { name, ...all } = data;
console.log(name, all);

let obj = {
  name: "Esteban",
  job: "front-enn in ISES",
};

let obj2 = {
  ...obj,
  city: "San Francisco",
};
console.log(obj2);

const hoaMoc = () => {
  return new Promise((resolve, reject) => {
    true
      ? setTimeout(() => {
          resolve("Hola, Soy Esteban");
        }, 1000)
      : reject(false);
  });
};

hoaMoc()
  .then((reponse) => console.log(reponse))
  .catch((error) => console.log(error))
  .finally(() => console.log("finally"));

//con esto hacemos el manejo de regExp (hacer coincidir una expresion regular con un patron)
const holaRegex = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
let match = holaRegex.exec("2018-08-20");
let anio = match[1];
let mes = match[2];
let dia = match[3];
console.log(anio, mes, dia);
