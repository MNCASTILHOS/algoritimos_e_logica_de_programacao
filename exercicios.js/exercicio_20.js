// Criar uma função que receba um array de números e retorne o menor número desse array.
// Exemplos:
// menorNumero([10, 5, 35, 65]) // retornará 5
// menorNumero([5, -15, 50, 3]) // retornará -15

function menorNumero(numeros) {
    let numMenor = numeros[0];
    for(num of numeros) {
        if(num < numMenor) {
            numMenor = num;
        }
    }
    return numMenor;   
}
    console.log(menorNumero([5, -15, 50, 3]));