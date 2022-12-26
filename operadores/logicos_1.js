let temDinheiro = false;
let estaEnsolarado = true;
let carroEstaNaGaragem = false;

let resultadoE = '#1 (AND) - Vai proshopping?';
resultadoE += temDinheiro && estaEnsolarado;
console.log(resultadoE);

let resultadoOu = '#2 (OR)- Vai pro shopping?';
resultadoOu += estaEnsolarado || carroEstaNaGaragem;
console.log(resultadoOu);

console.log(true !== true);
console.log(true !== false);
console.log(false !== true);
console.log(false !== false);

console.log('Não verdadeiro: ' + !true);
console.log('Não falso: ' + !false);