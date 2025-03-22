require('colors');
const readline = require('readline-sync');

/**Función que encuentra la palabra más larga en una cadena de texto*/
function palabraLarga(cadena) {
    const palabras = cadena.split(" ");
    let palabraLarga = "";

    for (let palabra of palabras) {
        if (palabra.length > palabraLarga.length) {
            palabraLarga = palabra;
        }
    }

    return palabraLarga;
}

let continuar = "";
do {
    console.clear();
    const textoUsuario = readline.question('\nIngrese una frase o texto: '.green);

    const resultado = palabraLarga(textoUsuario);

    console.log('\n*********************************************************************************'.magenta);
    console.log(`La palabra más larga es: `.yellow + `${resultado}`.blue);
    console.log('*********************************************************************************'.magenta);

    continuar = readline.question('\n¿Desea analizar otra frase? (si/no): '.blue);
} while (continuar.toLowerCase() === "si");