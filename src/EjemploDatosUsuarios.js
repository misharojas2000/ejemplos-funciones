const readline = require('readline-sync');

function sumar(primerNumero, segundoNumero){
    const resultado = primerNumero + segundoNumero;
    return resultado;
}

const primerNumeroStr = readline.question('Ingrese el primer numero a sumar: ');
const segundoNumeroStr = readline.question('Ingrese el segundo numero a sumar: ');

const primerNumero = Number(primerNumeroStr);
const segundoNumero = Number(segundoNumeroStr);

console.log(`El resultado de la suma es: ${sumar(primerNumero, segundoNumero)}`);
