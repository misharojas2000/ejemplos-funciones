/**Ejemplos de funciones */

function sumar(primerNumero, segundoNumero){
    const resultado = primerNumero + segundoNumero;
    return resultado;
}

const resultadoSuma = sumar(5, 15);
console.log(`El resultado de la suma es: ${resultadoSuma}`);

function restar(primerNumero, segundoNumero){
    return primerNumero - segundoNumero;
}
console.log(`El resultado de la resta es: ${restar(25, 10)}`);
