let nota = 3.6;

switch(Math.ceil(nota)) {
    case 10: case 9: case 8: case 7:
        console.log('Parabéns!');
        break;
    case 5: case 6:
        console.log('Recuperação!');
        break;
    case 4: case 3: case 2:
        console.log('Reprovado');
        break;
    case 1: case 0:
        console.log('Muito Reprovado!')
        break;
    default:
        console.log('Nota inválida');
}