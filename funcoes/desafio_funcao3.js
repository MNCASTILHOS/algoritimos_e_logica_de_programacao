//calcular  media do aluno, usando as duas maiores notas e mostrar no final o status
// >= 7 aprovado
// >= 4  e < 6.7 recuperação
// < 3.9 reprovado


function retornaMedia (n1, n2, n3) {
    
    let menor = Math.min(n1, n2, n3);

    let media = (n1 + n2 + n3 - menor) / 2;
    return media;
}

let mediaFinal = retornaMedia (7.8, 3.1, 6.7);



if (mediaFinal >= 7) {
    console.log("aprovado")
}

if (mediaFinal >= 4 && mediaFinal < 7) {
    console.log("recuperação")
}

if (mediaFinal < 3.9) {
    console.log("reprovado")
}

