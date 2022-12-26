const cliente = {
    condigo: 16532,
    nome: 'Ana',
    vip: true,
    endereço: {
        logradouro: 'Rua ABC',
        numero: 123,
        complemento: 'Apto 101 Bloco C',
        pontosRef: [
            {nome: 'Hospital x', muitoProximo: true},
            {nome: 'Shopping y', muitoProximo: false},
        ]
    },

    nomeFilhos: ['Bia', 'Carlos', 'Gabriel']
};

console.log(cliente.endereço.logradouro);
console.log(cliente.endereço.pontosRef[1].muitoProximo);