const lista = [
    {
        name: 'sabão em pó',
        preço: 30,
    },
    {
        name: 'cereal',
        preço: 12,
    },
    {
        name: 'toalha',
        preço: 30,
    },
]

const saldoDisponivel = 100;

function calculaSaldo(saldoDisponivel, lista) {
    return lista.reduce(function(prev, current, index) {
        return prev - current.preço;
    }, saldoDisponivel);
}

console.log(calculaSaldo(saldoDisponivel, lista));