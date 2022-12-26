const d1 = {
    dia: 30,
    mes: 12,
    ano: 2008,
    exibir: function() {
        return (`${this.dia}/${this.mes}/${this.ano}`);
    }
};

const d2 = {
    dia: 06,
    mes: 03,
    ano: 2015,
    exibir: function() {
        return (`${this.dia}/${this.mes}/${this.ano}`);
    }
};

const d3 = {
    dia: 15,
    mes: 01,
    ano: 2010,
    exibir: function() {
        return (`${this.dia}/${this.mes}/${this.ano}`);
    }
};

console.log(d1.exibir())
console.log(d2.exibir())
console.log(d3.exibir())