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

console.log("**************Operadores aritméticos****************");
//Operadores aritméticos 
let jk = 2 + 5 * 2;
console.log(jk);
console.log("******Modulo*********");
let modulo = 5 % 2 //Devuelve el residuo de una división 
console.log(modulo, "devuelve el residuo de una división");

console.log("****************Operadores relacionales*************")
/* Operadores relacionales  */
 console.log(8>9);
 console.log (8<9);
 console.log(8>=9);
 console.log(8<=9);
 console.log(7>=7);

 /* 
 = 1 igual es asinación de variable
 ==  2 iguales es comparación de valores 
 === 3 iguales es comparación de tipo de dato y valor
 */
 console.log(7==7);
 console.log("7" == 7);
 console.log(0== false);

 console.log(7===7);
 console.log("7" ===7);
 console.log(0 === false);

 console.log("************operadores de incremento y drecemento*************");

 let i = 1; //i de incremento 
 //i = i + 2; //Está manera y la del siguiente renglón significan lo mismo, dan el mismo resultado
 //i += 2; 
 //i -= 2 //Se puede utilizar con cualquier operación
 //i /=2
 i*=2
 console.log(i);

 console.log("********** operador unario********"); //Se usa cuando vamos aumentando o dismnuyendo en un solo valor por cada vez
 let i2 = 2;
 i2 ++;
 console.log(i2);

 let i3 = 2;
 i3 --
 console.log(i3);

 console.log("***********Operadores lógicos*********")
 /*
  ! Not,no : Niega es decir lo que es verdadero lo vuelve falso y visceversa 
 || Or, o: Cuando tengo dos o más condiciones, con que una se cumpla es decir OR validará, con que una sea
  verdadera OR validará y será verdadero
 && and, y : Cuando tengo dos o más condiciones todas tienen que cumplirse, es decir ser verdaderas para que AND 
 se valide
  */

  console.log(true);
  console.log(!true, "Era verdadero pero lo volvió falso"); 
  console.log(false);
  console.log(!false, "Era falso pero lo volvió verdadero ");
  console.log((9===9)||("9"===9));
  console.log((9===9)&&("9"===9));
  console.log((9===9)&&("9"==="9"));


  console.log("******************Condicionales*************");
  //if- else
  let mayoriaEdad = 17;
  if(mayoriaEdad > 17){
      console.log("Eres mayor de edad");
  }
  else {
      console.log("Eres menor de edad");
  }

  //if- else if- else
 /*  Déjame dormir 0hrs - 5hrs
  Buenos días 6hrs - 11hrs
  Buenas tardes 12hrs - 18hrs
  Buenas noches 19hrs - 23hrs
   */

   let hora1 = 20;

   if(hora1 >= 0 && hora1 <= 5){
       console.log("Déjame dormir");
    } else if (hora1 >=6 && hora1 <=11) {
        console.log("Buenos días");
    } else if (hora1 >= 12 && hora1 <=18){
        console.log("Buenas tardes");
    } else {
        console.log("Buenas noches");
    }
    
//Diferente lógica mismo resultado 
    if(hora1 < 6 ){
        console.log("Déjame dormir");
     } else if (hora1 > 5 && hora1 < 12){
         console.log("Buenos días");
     } else if (hora1 > 11 && hora1 < 19){
         console.log("Buenas tardes");
     } else {
         console.log("Buenas noches");
     }


  console.log("**************Operador ternario*************");
/*   El operador ternario es la simplificaciín del if else y se escribe de la
  siguiente manera 
  (condición) ? verdadera : falsa 
 */

 let edad02= 19;

 let eresMayor = (edad02 >= 18)
  ? "Eres mayor de edad" 
  : "Eres menor de edad";
 
 console.log(eresMayor);

 //swith-case

 /* 
 domingo 0
 lunes 1
 martes 2
 miércoles 3
 jueves 4
 viernes 5
 sábado 6
  */

  let diaSemana= 6;

  switch (diaSemana) {
      case 0:
          console.log("Domingo")
          break;
          case 1:
              console.log("Lunes")
              break;
              case 2:
                  console.log("Martes")
                  break;
                  case 3:
                      console.log("Miércoles")
                      break;
                      case 4:
                          console.log("Jueves")
                          break;
                          case 5:
                              console.log("Viernes")
                              break;
                              case 6:
                                  console.log("Sábado")
                                  break;
      default:
          console.log("El día no existe")
          break;
  };

  console.log("*************Ciclos***************");
  //While significa mienras... 
  let contador=0;

  while (contador < 10) {
      console.log("while" + contador);
      contador ++;    
  }

  do {
    console.log("do while"+ contador);
    contador ++; 
  } while (contador < 10);


  //Ciclo for
/* for (incialización de la variable; condición; decremento o incremento) {
    sentencias que ejecuta el for
} */


  for (let i = 0; i < 10; i++) {
      console.log("for" + i);   
  }

  let listaNumeros = [10,20,30,40,50,60,70,80,90,100];

  for (let i= 0; i < listaNumeros.length; i++) {
      console.log(listaNumeros[i]);
  }

//Si se le indica el número de recorrido solo pinta lo que se le indique en el ciclo
  let listaNombres = ["Juana", "Juan", "María", "Jonás", "Ruth"];
  for (let i= 0; i < 2; i++) {
    console.log(listaNombres[i]);
}

console.log("**************for in*************")
//Me permite recorrer/iterar las porpiedades o propiedades de un objeto primitivo

const desayuno = {
    bebida: "café",
    platillo: "huevos motuleños",
    fruta: "mango",
    jugo: "verde",
    pan: "conde"
}

for (const propiedad in desayuno) {
console.log(propiedad);
}

for (const propiedad in desayuno) {
    console.log(`Key:${propiedad}, Value:${desayuno.propiedad}`);
}

for (const propiedad in desayuno) {
    console.log(`Key:${propiedad}, Value:${desayuno[propiedad]}`);
}


console.log("***************for of******************");
//El método for of me permite recorrer cualuqier elemento que sea iterable en JS (Ejemplo arreglos, cadenas de texto) 

for (const elemento of listaNombres) {
console.log(elemento);
};

let cadenaDeTexto = "Haciendo pruebas con for of"

for (const iterator of cadenaDeTexto) {
    console.log(iterator);    
}; 

console.log("***************************Manejo de errores******************");

/* try {
    console.log("En el try se agrega el código a evaluar");
} catch (error) {
    console.log("Catch captura cualquier error surgido en el Try");
} finally {
console.log("El bloque finally se ejecutará siempre al final de un bloque TryCatch")
} //Solo sale el funally en consola porque no hay error, haya error o no ese bloque siempre se ejecuta.  */

try {
    console.log("En el try se agrega el código a evaluar");
    noExisteEstaVariable; 
    console.log("Segundo mensaje en el try");
} catch (error) {
    console.log("Catch captura cualquier error surgido en el Try");
    console.log(error);
} finally {
console.log("El bloque finally se ejecutará siempre al final de un bloque TryCatch")
}

console.log("**************Mensajes personalizados de error***************");

try {
let numeroError= 10;
if (isNaN(numeroError)) {
throw new Error ("El carácter introducido no es un número")
}
console.log(numeroError * numeroError);
} catch (error) {
console.log(`Se produjo el siguiente error: ${error}`);
}


try {
    let numeroError1= "y";
    if (isNaN(numeroError1)) {
    throw new Error ("El carácter introducido no es un número")
    }
    console.log(numeroError1 * numeroError1);
    } catch (error) {
    console.log(`Se produjo el siguiente error: ${error}`);
    }


    console.log("*************Break & Continue");

    const arregloNumeros =[1,2,3,4,5,6,7,8,9,0];

    for (let i=0; i< arregloNumeros.length; i++) {
        console.log(arregloNumeros[i]);
    }; 

console.log("************break*****************");
    for (let i=0; i < arregloNumeros.length; i++) {
        if (i===5) { //Cuando se cumple la condicón se corta el ciclo
            break;
        }
        console.log(arregloNumeros[i]);
    };

console.log("***************continue*******************");
    for (let i=0; i < arregloNumeros.length; i++) {
        if (i===5){ //En cuanto se cumple la condición, la brinca y continua, se salta esa iteración y sigue
            continue;
        }
        console.log(arregloNumeros[i]);
    };

    console.log("*****************Desctructuración**********************");
     
    let numerosArreglo = [1,2,3,4];
     
    //Sin utilizar destructuración, si qusiera asignar cada valor a una nueva variable
    let uno = numerosArreglo[0];
    let dos = numerosArreglo[1];
    let tres = numerosArreglo[2];
    let cuatro = numerosArreglo[3];

    console.log(uno,dos,tres,cuatro);

    //Con destructuración 
    const [one,two,three,four] = numerosArreglo;
    console.log(one,two,three,four); 

    const horarios = {
        mañana: "8am",
        tarde: "1pm",
        noche: "8pm",
        madrugada: "3am"
    }

    //En la destructuración de objetos las variables a crear deben llamarse igual que las propiedades
    let {mañana, tarde, noche, madrugada} = horarios;
console.log(mañana, tarde, noche, madrugada);

console.log("****************Objetos literales******************");

let escribir= "pluma"
let borrar = "corrector"
let apuntes = "libreta"
let lectura = "libro"

const utilesEscolares = {
    escribir: escribir,
    borrar: borrar,
    apuntes: apuntes,
    lectura: lectura,
    transportar: function () {
        console.log ("Mochila");
    }
};

console.log(utilesEscolares);
utilesEscolares.transportar();

/* Con ES6 crea automaticamente las propiedades del objeto con las variables que indiquemos, 
si quiero agregar una propiedad lo puedo hacer directamente creando el nuevo objeto */
const school = {
    escribir, 
    borrar,
    apuntes,
    lectura,
    mochila:"Azul",
    transportar1 () {
        console.log("Lonchera para la comida")
    }
};

console.log(school);
school.transportar1(); //Para invocar la función

console.log("*********** Parámetros REST & Operador Spread ******************");

function sumaVarios (a,b) {
    return a + b
}

function sumaVariosRest (a,b,...c) { //El parametro Rest son los tres puntos suspensivos
let resultado = a + b;
c.forEach(function (n) {
    resultado += n
});
return resultado
}

console.log(sumaVarios(1,2));
console.log(sumaVariosRest(1,2,3,4));
console.log(sumaVariosRest(1,2,3,4,5));
console.log(sumaVariosRest(1,2,3,4,5,6));
console.log(sumaVariosRest(1,2,3,4,5,6,7));
console.log(sumaVariosRest(1,2,3,4,5,5,7,8));

//Operador de propagación 

const arregloUNo = [1,2,3,4,5];
const arregloDos = [5,6,7,8,9,0];
console.log(arregloUNo,arregloDos);

const arreglo3 = [arregloUNo,arregloDos];
console.log(arreglo3);

const arregloTres = [...arregloUNo, ...arregloDos];
console.log(arregloTres);
