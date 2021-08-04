function nueva(name, age, job) {
  var name = name || "Esteban Gomez";
  var age = age || 30;
  var job = job || "Front-end developer";
  console.log(name, age, job);
}

//Ecmascript 6
function nueva2(name = "Esteban Gomez", age = 30, job = "Front-end developer") {
  console.log(name, age, job);
}
nueva2();
nueva2("Juan Perez", 35, "Back-end developer");

// clase 2
let lorem = "lorem itsup jajajaja";

let person = {
  name: "Esteban",
  age: 30,
  job: "Front-end developer",
};

let { name, age, job } = person;
console.log(name, age, job);

//spread operator
let team1 = ["steban", "juan", "pedro", "jose"];
let team2 = ["Daniel", "Manuel", "Lucas", "Tatiana"];

let educacion = ["Camilo", ...team1, ...team2];
console.log(educacion); // ['Camilo', 'steban', 'juan', 'pedro', 'jose', 'Daniel', 'Manuel', 'Lucas', 'Tatiana']

//parametros en objectos
let name = "Esteban";
let age = 30;

obj = { name: name, age: age };

//es6 parametros en objetos
obj2 = { name, age };
console.log(obj2); // {name: 'Esteban', age: 30);

//arrows functions

const names = [
  { name: "Esteban", age: 30 },
  { name: "Juan", age: 35 },
  { name: "Pedro", age: 40 },
];
let listNames = names.map(function (el) {
  el.name;
});
console.log(listNames); // ['Esteban', 'Juan', 'Pedro']

let listNames2 = names.map((el) => console.log(el.name));

const listNames3 = (name, age) => {
  return { name, age };
};
//solo cuando es un solo parametro
const listNames4 = (name) => name;

//PROMESAS

const jelow = () => {
  return new Promise((resolve, reject) => {
    if (false) {
      resolve("jelow, ha sido positivo");
    } else {
      reject("algo salió mal");
    }
  });
};
jelow()
  .then((response) => console.log(response))
  .catch((err) => console.log(err));

//clases

class Calculadora {
  constructor() {
    this.num1 = 0;
    this.num2 = 0;
  }
  sumar(num1, num2) {
    this.resultado = num1 + num2;
    return this.resultado;
  }
}

const calc = new Calculadora();
console.log(calc.sumar(2, 2));

//modules
const hello = require("./module");

console.log(hello());

//generator functions
function* hola() {
  if (true) {
    yield "Hola, ";
  }
  if (true) {
    yield "Mundo";
  }
}
let generadores = hola();
console.log(generadores.next().value);
console.log(generadores.next().value);
console.log(generadores.next().value);
function* gen() {
  yield 1;
  yield 2;
  yield 3;
}

var g = gen(); // "Generator { }"
console.log(g.next().value); // 1);
console.log(g.next().value); // 2);
console.log(g.next().value); // 3);
console.log(g.next());

function* contar() {
  let i = 0;
  while (true) {
    yield i++;
  }
}
let cont = contar();
console.log(cont.next().value);
console.log(cont.next().value);
console.log(cont.next().value);
console.log(cont.next().value);
console.log(cont.next().value);
