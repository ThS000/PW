const input = document.querySelector('#nome-input')

const button = document.querySelector('#saudacao-btn')

const resultado = document.querySelector('#resultado')


function cumprimentar() {

    const nome = input.value.trim()

    if (!nome) {

        resultado.textContent = 'Digite um nome.'

        return
    }

    resultado.textContent = `Olá, ${nome}!`

}


button.addEventListener('click', cumprimentar)