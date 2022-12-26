// Escreva uma função que receba um array de números e retornará a soma de todos os números desse array.
// Exemplos:
// somarNumeros([10, 10, 10]) // retornará 30
// somarNumeros([15, 15, 15, 15]) // retornará 60

// function somarNumeros(numeros) {
//     const quantidadeDeNumeros = numeros.length
//     return (quantidadeDeNumeros === 0) ? 0 : numeros[0] + somarNumeros(numeros.slice(1))
// }

// console.log(somarNumeros([1, 2, 3, 4]))

function somarNumeros(numeros) {
    let soma = 0
    numeros.forEach(numero => soma += numero)
    return soma
    }
console.log(somarNumeros([1, 2, 3, 4]));

