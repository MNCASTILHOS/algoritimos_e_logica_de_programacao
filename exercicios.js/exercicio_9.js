// Escreva uma função que receba dois parâmetros. O primeiro parâmetro é o elemento que repetirá, enquanto
// que o segundo será o número de vezes que haverá repetição. Um array será retornado.
// Exemplos:
// repetir("código", 2) // retornará ["código", "código"]
// repetir(7, 3) // retornará [7, 7, 7]

function retornaArray(elemento, qtd) {
    let array = [];
    for (let i = 1; i <= qtd; i++) {
        array.push(elemento);
    };
    return array;
}
console.log(retornaArray(2, 6));