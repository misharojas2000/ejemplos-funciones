/** GENERACIÓN DE UN NÚMERO ALEATORIO ENTRE DOS VALORES DADOS */

require('colors');
const readline = require('readline-sync');

function numeroAleatorioEntre(min, max) {
    if (min > max) {
        console.log("\nEl valor minimo no puede ser mayor que el maximo.".bgRed);
        return null;
    }

    return Math.floor(Math.random() * (max - min + 1)) + min;
}


let continuar = "";
do {
    console.clear();

    const min = Number(readline.question('Ingrese el valor minimo: '.green));
    const max = Number(readline.question('Ingrese el valor maximo: '.green));

    const aleatorio = numeroAleatorioEntre(min, max);

    if (aleatorio !== null) {
        console.log('\n*********************************************************************************'.magenta);
        console.log(`El numero aleatorio entre ${min} y ${max} es: `.yellow + `${aleatorio}`.blue);
        console.log('*********************************************************************************'.magenta);
    }

    continuar = readline.question('\n¿Desea generar otro numero aleatorio? (si/no): '.blue);
} while (continuar.toLowerCase() === "si");