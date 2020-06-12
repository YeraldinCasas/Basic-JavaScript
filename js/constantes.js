export const PI = Math.PI

 export let usuario = "Yerald";
  
 //let password = "123456" //No permitido export default let password
 //export default password; //Así en otro renglón si se puede 




//Cuando guardas en una varible la función, se conoce como función expresada
const hello = () => console.log("Hola spy una función expresada");


//Esto es una función declarada 

export default function saludar () {
    console.log("Hola módulos +ES6");
}

//Solo puedes tener una sola exportación default 

export class Saludar{
    constructor(){
        console.log("Hola soy una clase")
    }
}