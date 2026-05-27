//usuário digita dois números
//clica no botão
//o resultado da soma aparece na tela

const input1 = document.querySelector('#numero1-input')
const input2 = document.querySelector('#numero2-input')
const button = document.querySelector('#somar-btn')
const resultado = document.querySelector('#resultado')

function somar() {

    const numero1 = Number(input1.value)
    const numero2 = Number(input2.value)

    const soma = numero1 + numero2
    resultado.textContent =` Resultado: ${soma}`

}
button.addEventListener('click', somar)
