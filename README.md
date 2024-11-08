# Sorteador de nomes :crystal_ball:

Este é um projeto simples em JavaScript para realizar sorteios de nomes; foi criado como uma continuação/melhoria do projeto [Jogo do Numero Secreto](https://github.com/ton-ayr/jogo-do-numero-secreto) realizado pelo curso de logica de programação na [Alura](https://cursos.alura.com.br/).

Neste projeto, o usuário informa uma lista de nomes e uma quantidade desejada para sorteio, e o programa retorna os nomes sorteados.

Acesse o Sorteador de nomes [aqui](https://sorteador-nine-sandy.vercel.app/)

## Funcionalidades

- Sorteio de uma quantidade específica de nomes entre os informados.
- Validação da quantidade de nomes e quantidade desejada.
- Opção para reiniciar o sorteio.

## Como Utilizar

1. Defina a `Quantidade` de nomes a serem sorteados.
2. Informe os nomes separados por vírgula no campo `Nomes`.
3. Clique no botão `Sortear` para exibir os nomes sorteados.
4. Para realizar um novo sorteio, clique em `Reiniciar` e repita o processo.

## Pré-requisitos

Este projeto utiliza apenas HTML, CSS e JavaScript, portanto, basta abrir o arquivo HTML em um navegador para utilizá-lo.

### Variáveis Principais

- `sorteioRealizado`: Booleano que controla se o sorteio já foi realizado.
- `listaNomes`: Array para armazenar os nomes informados pelo usuário.

### Funções Principais

1. **sortearNomes**: Realiza o sorteio de nomes e exibe os resultados.
   - Valida a quantidade mínima de nomes e o valor da quantidade desejada.
   - Realiza o sorteio de nomes aleatórios sem repetir nomes.

2. **trocarStatusBotao**: Altera o status do botão `Reiniciar` conforme o sorteio seja realizado ou reiniciado.

3. **reiniciar**: Reinicia o sorteio, limpa os campos e redefine o estado inicial.

## Exemplo de Uso

```javascript
// Array para armazenar os nomes informados
let listaNomes = [];

// Função para realizar o sorteio
function sortearNomes() {
    // Obtém os nomes e quantidade informada pelo usuário
    // Realiza a validação e o sorteio dos nomes
}

// Função para reiniciar o sorteio
function reiniciar() {
    // Limpa os campos e reseta o status
}
```

## Estrutura HTML esperada

Este script depende da presença de elementos HTML específicos, como:

- Um campo de entrada para nomes com id="de".
- Um campo de entrada para a quantidade com id="quantidade".
- Um contêiner para exibir o resultado com id="resultado".
- Um botão Reiniciar com id="btn-reiniciar".

## Exemplo de Interface

```html
<input id="de" type="text" placeholder="Digite os nomes separados por vírgula">
<input id="quantidade" type="number" placeholder="Quantidade de nomes">
<button onclick="sortearNomes()">Sortear</button>
<button id="btn-reiniciar" onclick="reiniciar()" disabled>Reiniciar</button>
<div id="resultado"></div>
```

## Melhorias Futuras

- Alterar o front para um proprio, pois mantive a estrutura do projeto base [Jogo do Numero Secreto](https://github.com/ton-ayr/jogo-do-numero-secreto)
- Permitir o sorteio com critérios adicionais.


