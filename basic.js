var hola= "Hola mundo"
let hello = "Hello world"
console.log(hola);
console.log(hello);
console.log(window);
console.log(window.hola);
console.log(window.hello);
//Ambito de bloque
console.log("*************var******************");
var musica = "Rock"
console.log("Variable música antes de bloque", musica);
//Esto es un bloque
{
    var musica = "Pop";
    console.log("Variable musica dentro del boque", musica);
}
console.log("Variable musica después el bloque",musica);
console.log("*************let******************");
let musica2 = "Rock"
console.log("Variable música antes de bloque", musica2);
//Esto es un bloque
{
    let musica2 = "Pop";
    console.log("Variable musica dentro del boque", musica2);
}
console.log("Variable musica después el bloque",musica2);
console.log("*************const******************");
let a;
const PI = 3.1416
//PI = 3.15;
//const NUEVE;
console.log(PI);
a = "Yeraldin";
console.log(a);

console.log("*************let con objetos y arreglos******************");

let objeto = {
    nombre: "Yeraldin",
    edad: 28
}


let colores = ["blanco","amarillo","verde"];
console.log(colores)
console.log(objeto);

console.log("************* después de agregar a objeto y array******************");
objeto.correo = "yeralgc@hotmail.com";
colores.push("naranja");
console.log(colores)
console.log(objeto);



console.log("*************const con objetos y arreglos******************");

let objeto1 = {
    nombre: "Yeraldin", //Esto es una propiedad
    edad: 28
}


let colores1 = ["blanco","amarillo","verde"];
console.log(colores1)
console.log(objeto1);

console.log("************* después de agregar a objeto y array con const******************");
objeto1.correo = "yeralgc@hotmail.com";
colores1.push("naranja");
console.log(colores1)
console.log(objeto1);

//Cadenas de texto 
let nombre = "Yeraldin";
let apellido = 'Casas'; //No importa si se usan comillas dobles o sencillas siempre y cuando sea igul en todo el doc
let saludo = new String("Hola mundo") //DEclaración formal con constructor 
console.log(nombre, apellido,saludo)
console.log("*************propiedad length******************");
console.log(
    nombre.length, 
    apellido.length,
    saludo.length,
    nombre.toUpperCase(),
    apellido.toLowerCase(),);
 let lorem = "                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
 console.log(lorem.includes("dolor"), lorem.includes("Yeraldin"), lorem)
 console.log(lorem.trim());
 console.log(lorem.split(" "));
 console.log(lorem.split(","));
 console.log(lorem.charCodeAt([i]))
    