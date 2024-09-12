let sorteioRealizado = false;

function sortearNomes() {
    let nomes = document.getElementById('de').value;
    let listaNomes = nomes.split(',').map(nome => nome.trim());

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
    for (let i = 0; i < quantidade; i++) {
        let indiceSorteado = Math.floor(Math.random() * listaNomes.length);
        nomesSorteados.push(listaNomes[indiceSorteado]);
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
    document.getElementById('nomes').value = '';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Nomes sorteados:  nenhum até agora</label>';
    sorteioRealizado = false;
    trocarStatusBotao();
}
