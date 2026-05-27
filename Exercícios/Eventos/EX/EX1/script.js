const input = document.querySelector('#nome-input')
const button = document.querySelector('#mostrar-btn')
const resultado = document.querySelector('#resultado')

function mostrarNome() {

    const nome = input.value

    resultado.textContent = nome

}


button.addEventListener('click', mostrarNome)