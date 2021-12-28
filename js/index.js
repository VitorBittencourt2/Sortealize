function sortear() {
    var primeirosValores = [];
    var segundosValores = [];
    var sorteados = [];
    const quantidade = document.querySelector('.quantidade-de-numeros').value;
    for (var i = 0; i < quantidade; i++) {
        const primeiroValor = document.querySelector('.primeira-variacao').value;
        primeirosValores.push(primeiroValor);

        const segundoValor = document.querySelector('.segunda-variacao').value;
        segundosValores.push(segundoValor);

        const valoresSorteados = Math.floor((Math.random() * segundoValor) + primeiroValor);

        while (valoresSorteados < primeiroValor) {
            valoresSorteados = Math.floor((Math.random() * segundoValor) + primeiroValor);

        }
        sorteados.push(valoresSorteados);
    }

    sorteados.sort((a,b)=>a-b);
    document.querySelector('.resultado').innerHTML = sorteados;
}
const botao = document.querySelector('.botao');
botao.addEventListener('click', () => {
    sortear();    
});