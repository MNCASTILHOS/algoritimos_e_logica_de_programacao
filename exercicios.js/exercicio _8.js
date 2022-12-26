// Desenvolva uma função que recebe dois números inteiros não negativos (maiores ou iguais a zero) e realize a
// multiplicação deles. Porém, não utilize o operador de mutiplicação.
// Exemplo:
// multiplicar(5, 5) // retornará 25
// multiplicar(0, 7) // retornará 0


function multiplicar (n1, n2) {
    let resultado = 0;
    for (let i = 1; i <= n1; i++) {
        resultado = resultado + n2;
    };
    return resultado;
}
console.log(multiplicar(10, 2));