console.log("Archivos modulos.js")

import saludar, {Saludar, PI, usuario} from "./constantes.js";
import {sumar} from "./aritmetica.js";
import {aritmetica1} from "./aritmetica.js";
import password from "./constantes.js";

console.log(PI, usuario);
console.log(sumar(3,2));
console.log(aritmetica1.restar1(9,5));
saludar();
let saludo = new Saludar();
saludo;