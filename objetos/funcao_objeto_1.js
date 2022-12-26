function criarData(dia, mes,ano) {
    return {
        dia: dia,
        mes: mes,
        ano: ano,
        exibir: function() {
            return `${this.dia}/${this.mes}/${this.ano}`;
        }    
    }
}


const d1 = criarData(30,12,2008);
const d2 = criarData(06,03,2015);
const d3 = criarData(15,01,2010);


console.log(d1.exibir())
console.log(d2.exibir())
console.log(d3.exibir())
