/**Consultar al usuario que tabla de multiplicar desea y generar por consola dicha tabla */
require('colors');
const readline = require('readline-sync');

function generarTabla(multiplicador){

if(multiplicador > 10){
    console.log("Solo se permiten las tablas del 1 al 10".bgRed);
    return;
}

console.log('*********************************************************************************'.magenta);

    for (let index = 1; index <= 10; index++){
        const resultado = multiplicador * index;

        console.log(`${index} x ${multiplicador} = ` + `${resultado}`.blue);
    }
console.log('*********************************************************************************'.Magenta);
console.log("");
}

let confirmacionBucle = "";
do{
    console.clear()
    const multiplicadorUsuario = Number(readline.question('\n ¿De que numero desea la tabla? '.green));
    generarTabla(multiplicadorUsuario);

    confirmacionBucle = readline.question('\n ¿Desea generar una nueva tabla? '.blue);
} while (confirmacionBucle === "si");

