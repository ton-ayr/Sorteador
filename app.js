// Variável para controlar se o sorteio já foi realizado
let sorteioRealizado = false;
// Array para armazenar os nomes informados
let listaNomes = [];

// Função para realizar o sorteio
function sortearNomes() {
    // Obtém os nomes informados
    let nomesInput = document.getElementById('de').value;
    listaNomes = nomesInput.split(',').map(nome => nome.trim());

    // Verifica se há pelo menos 2 nomes informados
    if (listaNomes.length < 2) {
        alert('Você precisa informar pelo menos dois nomes separados por vírgula.');
        return;
    }

    // Obtém a quantidade informada
    let quantidade = parseInt(document.getElementById('quantidade').value);

    // Verifica se a quantidade é válida
    if (isNaN(quantidade) || quantidade <= 0) {
        alert('A quantidade deve ser maior que 0.');
        return;
    }

    // Verifica se a quantidade é maior que o número de nomes
    if (quantidade > listaNomes.length) {
        alert('A quantidade não pode ser maior que o número de nomes informados.');
        return;
    }

    // Array para armazenar os nomes sorteados
    let nomesSorteados = [];
    while (nomesSorteados.length < quantidade) {
        // Faz o sorteio
        let indiceSorteado = Math.floor(Math.random() * listaNomes.length);
        let nomeSorteado = listaNomes[indiceSorteado];

        // Verifica se o nome já foi sorteado
        if (!nomesSorteados.includes(nomeSorteado)) {
            nomesSorteados.push(nomeSorteado);
        }
    }

    // Exibe os nomes sorteados
    let textoResultado = document.getElementById('resultado');
    textoResultado.innerHTML = `<label class="texto__paragrafo">Nomes sorteados: ${nomesSorteados.join(', ')}.</label>`;

    // Atualiza o status do botao reiniciar
    sorteioRealizado = true;
    trocarStatusBotao();
}

// Função para trocar o status do botão de reiniciar
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

// Função para reiniciar o sorteio
function reiniciar() {
    document.getElementById('de').value = '';
    document.getElementById('quantidade').value = '';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Nomes sorteados: nenhum até agora</label>';
    sorteioRealizado = false;
    trocarStatusBotao();
}
