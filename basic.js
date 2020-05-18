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
 
console.log("*************concatenación******************");
let nombre02="Yeraldin";
let apellido02="Casas";
//Concatenación
let saludo02= "Hola mi nombre es " + nombre02 + " " + apellido02 + "."; 
console.log("Concatenación",saludo02);
//Interpolación Template string
saludo03=`Hola mi nombre es ${nombre02} ${apellido02}.`
console.log("Interpolación ES6",saludo03);

console.log("*******************Números*****************");
let numero1= 2;
let numero3 = new Number (1);
let numero4 =7.1897
let numero5 ="567.68876"
console.log(numero1,numero3);
console.log(numero4.toFixed(1));
console.log(numero4.toFixed(3));
console.log(numero4.toFixed(4));
console.log(parseInt(numero4));//Devuelve solo la parte entera del número
console.log(typeof(numero5), typeof(numero4));// typeof me dice el tipo de valor en este caso numero o string
console.log(numero3 + numero1);
console.log(numero3 + parseInt(numero5)); //parseInt permite sumar un string numero más un número 
console.log(numero3 + parseFloat(numero5)); //parseFloat suma decimales correctamente

console.log("***************Valores booleanos****************");
let verdadero = true;
let falso = false;
let v = Boolean(true); //Se pone la palabra reservada boolean como constructor
let f = Boolean (false);
console.log(verdadero,falso);
console.log(typeof verdadero, typeof falso);
console.log(Boolean(0)); //Más información MDN falsy
console.log(Boolean(-7)); //Más información MDN truhty
console.log(Boolean(""));
console.log(Boolean(" "));

console.log("***************undefined, null & NaN**********************")
let indefinida;
console.log(indefinida); 
/* Aparecerá en la consola como undefined, esto significa que no se ha 
incializado la variable y que el valor está ausente lo asinga JS */

let nulo = null
console.log(nulo);
/* Null es un valor especial que indica la ausencia de un valor
pero es asignado así intencionalmente por el programador 
 */

let noEsUnNumero = "Jelou" * 98
console.log(noEsUnNumero); //Aparece en consola como NaN Not a Number "No es un numero"

console.log("************Funciones*************")
/* Una función es un bloque de código autocontenido, 
que se puede definir una vez y ejecutarse en cualquier momento.
opcionalmente una función puede aceptar parámetros y devolver un valor. 
Las funciones en JS son un tipo especial de objetos:
Se dice que las funciones son ciudadanos de primera clase porque pueden 
asignarse a un valor, y pueden pasarse como argumentos y usarse como un valor de retorno */


//Función declarada () aquí van los parámetros {} aquí va el cuerpo de la función 
function estoEsUnaFuncion () {
    console.log("uno");
    console.log("dos");
    console.log("tres");  
}

//Invocación de función lleva (), estos indican que una función se va a ejecutar, si la invoco 4 veces se ejecuta 4 veces
estoEsUnaFuncion();
estoEsUnaFuncion();
estoEsUnaFuncion();
estoEsUnaFuncion();
console.log("************función que devuelve un valor*****************")                    

function unaFuncionQueDevuelveUnValor () {
 return "La función ha retornado una cadena de texto"
}

let valor = unaFuncionQueDevuelveUnValor();
console.log(valor);

console.log("************Función que recibe valores como parámetros***************")

function perro (apodo, años1) {
    console.log(`Hola soy ${apodo} y tengo ${años1} años.`);
}

perro("Romina","11");
perro(); //Ejecutar función sin parámetros marcará en consolo como undefined

/*  Asignación de valores por defecto igualando dentro de la
declaracipon del parámetro */
function perro1 (apodo="Bonifacia", años1="2"){
    console.log(`Hola soy ${apodo} y tengo ${años1} años.`);
}; 
perro1();
funcionDeclarada();

console.log("*********funciones declaradas vs funciones expresadas****************")

function funcionDeclarada (){
    console.log("Esto es una función declarada, puede invocarse en cualquier,parte de nuestro código incluso antes de que la función sea declarada");
}

funcionDeclarada();
/* 
funcionExpresada(); No puedes acceder a la función expresada antes de declararla, y
porque se esta invocando antes de su inicialización */

//función anónima o sea sin nombre 
const funcionExpresada = function(){
    console.log("Esto es una función expresada,es decir una función que se le ha asignado como valor a una variable, si invocamos una función antes de su declaraciín JS nos dirá...")
}

funcionExpresada();

console.log("*******************Array***********************")
const ab = []
const cd = [1, "Hola", true, ["A","B","C","D"]];
console.log(cd)
console.log(cd[1]);
console.log(cd[3]) //Acceder al aray que está en el array e la posición 3
console.log(cd[3][2]) //Acceder a la posición 2 del tercer elememto , letra C

const ef = Array.of(1,2,3,4,6,7,8);
console.log(ef)

const gh = Array(100).fill(false);
console.log(gh);


console.log("************Propiedades arrays********************");
const colores2 = ["Rojo","Verde","Azul"];
console.log(colores2);
colores2.push("Negro"); //Agrega un elemento al final 
console.log(colores2);
colores2.pop(); //quita el último elemento 
console.log(colores2); 

colores2.forEach(function (el, index) {
    console.log(`<li id="${index}">${el}<li>`)
});

console.log("*****************Objetos*******************");

const objeti = {};
console.log(objeti);

/* Dentro de un objeto a las variables se les van a llamar atributos/propiedades  y a las funciones métodos*/
const yeralia = {
    nombre: "Yeraldin",
    edad:"28",
    cumpleaños: "2/08/91",
    pasatiempo: ["correr","comer","dormir"],
    soltero: true,
    contacto : {
        email: "yeralgc@hotmai.com",
        celular: 55678984,
    },
saludar: function () {
    console.log("Hola");
},
decirMiNombre : function () {
    console.log(`Hola mi nombre es ${this.nombre} y tengo ${this.edad} años y me puedes contactar con ${this.contacto.email}`)
},
}

console.log(yeralia);
console.log(yeralia["cumpleaños"]);
console.log(yeralia["nombre"]);

console.log(yeralia.nombre);
console.log(yeralia.pasatiempo);
console.log(yeralia.pasatiempo[2]);
yeralia.saludar();
yeralia.decirMiNombre();

console.log(Object.keys(yeralia));
console.log(Object.values(yeralia));
console.log(yeralia.hasOwnProperty("nombre"));
console.log(yeralia.hasOwnProperty("nacimiento"));