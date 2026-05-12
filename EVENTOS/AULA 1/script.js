const botao = document.querySelector('button');

function clicar() {

    if (botao.textContent === 'Botão') {
        botao.textContent = 'Fui clicado';
    } 
    
    else if (botao.textContent === 'Primeiro clique') {
        botao.textContent = 'Segundo clique';
    } 
    
    else {
        botao.textContent = 'PARA';
    }
}

botao.addEventListener('click', clicar);