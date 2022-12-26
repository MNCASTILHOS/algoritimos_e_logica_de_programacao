// Crie uma função que receba uma array e retorne o primeiro e o último elemento dess
//e array como um novo
// array:// Exemplos:
// receberPrimeiroEUltimoElemento([7,14,"olá"]) // retornará `[`7, "olá"]
// receberPrimeiroEUltimoElemento([-100, "aplicativo", 16]) // retornará [-100, 16]

function receberPrimeiroEUltimoElemento(array) {
    let first = array[0];
    let last = array[array.length-1];
    return [first, last];
}
console.log(receberPrimeiroEUltimoElemento([-100, "aplicativo", 16]));