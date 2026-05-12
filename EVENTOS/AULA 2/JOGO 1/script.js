const botao1 = document.querySelector('#botao1');
const botao2 = document.querySelector('#botao2');
let pontos = 0;

function adicionar() {

    pontos++;

    botao1.textContent = 'Pontuação : ' + pontos;
}

function remover() {

    pontos = pontos - 10;

    if (pontos < 0) {
        pontos = 0;
    }

    botao1.textContent = 'Pontuação : ' + pontos;
}

botao1.addEventListener('click', adicionar);

botao2.addEventListener('click', remover);