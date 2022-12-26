// Crie uma função que receba três números como parâmetro (numero, minimo, maximo) e também um parâmetro booleano (inclusivo)
// e retorne se o parâmetro numero (o primeiro parâmetro) está entre minimo e maximo. Quando o parâmetro inclusivo for true, tenha
// "entre" como inclusivo, ou seja, considerando se numero é igual a minimo ou a maximo. Caso o parâmetro inclusivo não seja
// informado, seu valor padrão deverá ser false, portanto, a lógica será exclusiva, não considerando se numero é igual a minimo ou a
// maximo.
// Exemplos:
// estaEntre(10, 100, 50) // retornará true
// estaEntre(16, 100, 160) // retornará false
// estaEntre(3, 150, 3) // retornará false
// estaEntre(3, 150, 3, true) // retornará true

function estaEntre(num, min, max, inclusivo=false ) {
    if (inclusivo) {
        return (num >= min && num <= max) ? true : false;
    }
    else {
         return (num > min && num < max) ? true : false;
    }
}
console.log(estaEntre(3,3,10,true));



//     if (inclusivo) {
//         if (num >= min && num <= max) {
//             return true;
//         }
//         else {
//             return false;
//         }
//     } 
//     else {
//         if (num > min && num < max) {
//             return true;
//         }
//         else {
//             return false;
//         }
//     }
// }

// console.log(estaEntre(50,10,50,5));




