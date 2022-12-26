function sempreRetornaUm() {
    return 1;
}


function textoOuNumero(retornaTexto) {
   // return retorna ? "Sou um texto" : 123;
    if (retornaTexto){
      return "Sou um Texto!";
    } 


    return 123;
}


let valor = sempreRetornaUm() + 999;
console.log(valor);


let texto = textoOuNumero(true);
console.log(texto);

console.log(textoOuNumero);