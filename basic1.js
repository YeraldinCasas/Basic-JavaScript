//Console es un objeto 

console.log(console);
console.error("Esto es un error");
console.warn("Esto es un aviso");
console.info("Esto es un mensaje informativo");
console.log("Esto es un registro de lo que ha pasado en nuestra aplicación");

let nombre= "Yeraldin";
let apellido ="Casas";
let edad = 28;

console.log(nombre);
console.log(apellido);
console.log(edad);

console.log(nombre, apellido, edad);

console.log(`Hola mi nombre es ${nombre} ${apellido} y tengo ${edad} años`);


//El mismo mensaje anterior pero con comodines 
console.log(`Hola mi nombre es %s %s y tengo %d años`,nombre,apellido,edad);



console.log(window);
console.log(document);

console.dir(window);
console.dir(document);

//console.clear();

console.group("Colores");
console.log("Amarillo");
console.log("Azul");
console.log("Rosa");
console.log("Verde");
console.groupEnd();

console.groupCollapsed("Colores");
console.log("Amarillo");
console.log("Azul");
console.log("Rosa");
console.log("Verde");
console.groupEnd();

console.log(console);
console.table(Object.entries(console).sort());
console.table(Object.entries(window));

const numero =[1,2,3,4,5];
const vocales = ["a","e","i","o","u"];
console.table(numero,vocales);
console.table(numero);
console.table(vocales);

console.clear();

const gato = {
    nombre: "Bonifacia",
    ojos:"verdes",
    color: "gris",
    edad: "2 años"
}
console.table(gato);



/* const arreglo = Array(1000000);

console.time("¿Cuánto tiempo tarda mi código?")
for (i = 0; i < arreglo.length; i++); {
    arreglo[i]= i;
}

console.timeEnd("¿Cuánto tiempo tarda mi código?");

console.log(arreglo);
 */


for (i = 0; i <=100; i++); {
    console.count("Código for");
    console.log(i);
}



let x= 3;
let y =2;
let pruebaXY= "Se espera que x siempre sea menor que y"

console.assert(x<y,{x,y,pruebaXY});