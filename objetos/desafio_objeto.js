// objeto data
// atributos: dia, mes e ano
// metodo: exibir -> "dia/mes/ano"

const casamento = {
    dia: 11,
    mes: 08,
    ano: 2022,
    exibir: function() {
        return (`${this.dia}/${this.mes}/${this.ano}`);
    }
};

console.log(casamento.exibir());
