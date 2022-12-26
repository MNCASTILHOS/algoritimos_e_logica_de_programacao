// Elabore uma função que recebe um número como parâmetro e retorne uma string com o símbolo "+" na
// quantidade especificada no parâmetro.
// Exemplos:
// simboloMais(2) // retornará "++"
// simboloMais(4) // retornará "++++"


function retornaString(numero) {
    let resultado = "";
    for (let i = 1; i <= numero; i++) {
        resultado += "+";
    };
    return `"${resultado}"`;
}
console.log(retornaString(10));