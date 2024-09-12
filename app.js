let sorteioRealizado = false;
let listaNomes = [];

function sortearNomes() {
    let nomesInput = document.getElementById('de').value;
    listaNomes = nomesInput.split(',').map(nome => nome.trim());

    if (listaNomes.length < 2) {
        alert('Você precisa informar pelo menos dois nomes separados por vírgula.');
        return;
    }

    let quantidade = parseInt(document.getElementById('quantidade').value, 10);

    if (isNaN(quantidade) || quantidade <= 0) {
        alert('Informe um valor válido para a quantidade.');
        return;
    }

    let nomesSorteados = [];
    while (nomesSorteados.length < quantidade) {
        let indiceSorteado = Math.floor(Math.random() * listaNomes.length);
        let nomeSorteado = listaNomes[indiceSorteado];

        if (!nomesSorteados.includes(nomeSorteado)) {
            nomesSorteados.push(nomeSorteado);
        }
    }

    let textoResultado = document.getElementById('resultado');
    textoResultado.innerHTML = `<label class="texto__paragrafo">Nomes sorteados: ${nomesSorteados.join(', ')}.</label>`;

    sorteioRealizado = true;
    trocarStatusBotao();
}

function trocarStatusBotao() {
    let botao = document.getElementById('btn-reiniciar');
    if (sorteioRealizado) {
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    } else {
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    }
}

function reiniciar() {
    document.getElementById('de').value = '';
    document.getElementById('quantidade').value = '';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Nomes sorteados: nenhum até agora</label>';
    sorteioRealizado = false;
    trocarStatusBotao();
}
