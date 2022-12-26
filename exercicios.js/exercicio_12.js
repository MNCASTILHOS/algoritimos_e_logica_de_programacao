// Crie uma função que receba um array de elementos e retorne um array somente com os números presentes no
// array recebido como parâmetro.
// Exemplos:
// filtrarNumeros(["Javascript", 1, "3", "Web", 2

function filtrarNumeros(array) {
    let resultArray = []; 
    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] === 'number') {
            resultArray.push(array[i]);
        }
    }
    return resultArray;
}

console.log(filtrarNumeros(["Javascript", 1, "3", "web", 2]));