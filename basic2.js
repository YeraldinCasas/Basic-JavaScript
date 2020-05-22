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
console.log("Mi cumpleaños", cumpleYer)