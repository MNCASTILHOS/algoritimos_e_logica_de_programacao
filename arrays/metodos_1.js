const numeros = [1, 2, 3, 4, 5];

numeros[0] = 100; //adicinona numeros no arrey, nesse na posição [0]
numeros.push(6); //adiciona um numero na ultima posição
const numeros2 = numeros.concat(7, 8, 9); // cria um novo arrey


console.log(numeros.join(' - ')) // separa os elementos com ' - '
console.log(numeros);
console.log(numeros2);
console.log(numeros.includes(10)); //mostra se o numero esta presente dentro do arrey
console.log(numeros.indexOf(5)); //mostra o indice do elemento

