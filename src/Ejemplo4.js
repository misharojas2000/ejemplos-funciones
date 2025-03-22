/**Ejemplos con funciones de flecha / Arrow Functions */

const multiplicar = (primerNumero, segundoNumero) => {
    return primerNumero * segundoNumero;
};
const resultadoMultiplicacion = multiplicar(5, 5);
console.log(`El resultado de la multiplicación es: ${resultadoMultiplicacion}`);

const dividir = (primerNumero, segundoNumero) => primerNumero / segundoNumero;

const resultadoDivision = dividir(20, 2);
console.log(`El resultado de la división es: ${resultadoDivision}`);
