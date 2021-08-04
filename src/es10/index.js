//flat method
let arr = [1, 2, 3, [1, 2, 3, [1, 2, 3]]];
console.log(arr.flat());
console.log(arr.flat(2));

//flatMap method
let arr2 = [1, 2, 3, 5, 6, 7, 8];

console.log(arr2.flatMap((el) => el));

//trimStart method
let str = "   hello world   ";
console.log(str);
console.log(str.trimStart());

//trimEnd method
let str2 = "hello world   ";
console.log(str2);
console.log(str2.trimEnd());

let entries = [
  ["name", "John"],
  ["age", 25],
];
console.log(Object.fromEntries(entries));

//simbolo
let mySymbol = "Hola soy Esteban y estoy aprendiendo muchísimo de Js";
let mySymbol2 = Symbol(mySymbol);
console.log(mySymbol2.description);
