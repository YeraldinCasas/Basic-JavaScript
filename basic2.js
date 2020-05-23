console.log(Date());

let fecha = new Date ();
console.log(fecha);

//Día del mes 
console.log("Día del mes",fecha.getDate());

//Día de la semana iniciando la cuenta en domingo igual a 0 
console.log("Día de la semana",fecha.getDay());

//Mes Enero es la posición 0
console.log("Mes", fecha.getMonth());

console.log("Año",fecha.getFullYear());

//Hora formato de 24 horas  
console.log("Hora",fecha.getHours());

console.log("Minutos", fecha.getMinutes());

console.log("Segundos", fecha.getSeconds());

console.log("Milisegundos",fecha.getMilliseconds());

console.log(fecha.toDateString());

console.log(fecha.toJSON());

console.log("Hora local", fecha.toLocaleString()); //22/5/2020 0:14:29

console.log("Hora loca", fecha.toLocaleTimeString());

console.log("Uso horario", fecha.getTimezoneOffset());

//getUTC es para obtenerlos datos de Londres el MG que es considerada la hora cero 
console.log("Hora en Londres", fecha.toUTCString());

console.log("Segundos desde el 1ro de enero de 1970 fecha Time stamp", Date.now());

let cumpleYer = new Date(1991,7,2);
console.log("Mi cumpleaños", cumpleYer);

console.log("*******************Objeto Math*****************")

console.log(Math);

console.log("Número Pi", Math.PI);

console.log("Valor absoluto de un número",Math.abs(-7.7));

console.log("Número redoneado hacia el número inmediato entero mayor",Math.ceil(4.5));

console.log("Número redondeado hacia el número inmediato entero menor", Math.floor(4.5));

console.log("Número redondeado hacia el número entero más cercano inmediato", Math.round(7.8));

console.log("Número redondeado hacia el número entero más cercano inmediato", Math.round(7.2));

console.log("Raíz cuadrada: Ejemplo 81 es igual a", Math.sqrt(81));

console.log("Elevar exponentes", Math.pow(2,5)) //Primer número es la base el segundo el exponente 

console.log("Me dice si un núm es pos neg o 0", Math.sign(-23));

console.log("Me da un número al azar entre 0 y 1", Math.random());

console.log("Número aletorio entre 0 y 1000", Math.random()*1000);

console.log("Número redondeado al más cercano inmediato y número al azar", Math.round(Math.random()*1000));

console.log("******************Operadores de Cortocircuito***************");

/* Cortocircuito OR - cuando el valor de la izquierda en la expresión 
siempre pueda validar a true es el valor que se cargara por defecto.

Cortocircuito AND - cuando el valor de la izquierda en la expresión 
siempre pueda validar a false es el valor que se cargará por defecto */

//A esto se le conoce como asignación  de valor por defecto, "Desconocido"
function saludar (nombre = "Desconocido") {
    console.log(`Hola ${nombre}`)
}

saludar();
saludar("Changoleon");
saludar ();

//Antes la asignación por defecto hacia de esta manera 
function saludarAntes (nombre) {
    nombre = nombre || "Desconocido"
    console.log(`Holaaaaaaa ${nombre}`)
};

saludarAntes();
saludarAntes("Margarito");

console.log("********OR elegirá siempre el valor de la izquiera si este tiende a TRUE*******");
console.log("Izquierda"||"Derecha");
console.log(1911||"Derecha");
console.log(true||"Derecha");
console.log({}||"Derecha");
console.log([]||"Derecha");


//Aqui se va por e valor que tienda a true 
console.log(false||"Derecha");
console.log(null||"Derecha");
console.log(undefined||"Derecha");
console.log(""||"Derecha");
console.log(0||"Derecha");
console.log(-2||"Derecha");

console.log("********AND elegirá siempre el valor de la izquiera si este tiende a FALSE*******");
console.log(false&&"Derecha");
console.log(null&&"Derecha");
console.log(undefined&&"Derecha");
console.log(""&&"Derecha");
console.log(0&&"Derecha");

console.log("*************Alert,prompt y confirm******************");
//No es necesario poner el objeto window
/* console.log(window);
window.alert("Hola esto es una alerta");
window.confirm("Esto es una alerta pero tengo dos botones: cancelar/aceptar");
window.prompt("Hola esto es un promt y le permite al usuaio ingresar un valor"); */

/* let alerta = alert("Hola esto es una alerta");
let confirmación = confirm("Esto es una alerta pero tengo dos botones: cancelar/aceptar");
let aviso = prompt("Hola esto es un aviso y le permite al usuaio ingresar un valor"); */

/* console.log(alerta);
console.log(confirmación);
console.log(aviso); */

console.log("*************Expresiones regulares******************");
/* Las expresiones regulares son una secuencia de caracteres que 
forman un patrón de búsqueda y que principalmente es utulizado 
en la búsqueda de cadenas de texto  */

let cadena="Lorem ipsum dolor sit amet consectetur adipiscing elit vel, tellus lorem accumsan enim phasellus sociosqu vitae tincidunt, risus vulputate faucibus litora sagittis id nunc. Parturient gravida rhoncus accumsan faucibus nascetur lobortis, venenatis dis porta habitant pretium risus luctus, nunc eros fusce sociosqu feugiat. "

/* bandera "g" quehaga el escaneo general,"i" para que ignore 
si es mayúscula o minuscúla, para usr dos bandera es "ig"*/
/* 
let expReg = new RegExp("lorem","ig");
console.log(expReg.test(cadena));
console.log(expReg.exec(cadena)); */

let expReg1 = /lorem{1,3}/ig; //Los numeros de los corchetes significan que la palabra está entre 1 y 3 veces
 console.log(expReg1.test(cadena));
 console.log(expReg1.exec(cadena));