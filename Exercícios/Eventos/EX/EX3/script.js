const button = document.querySelector('#contador-btn')

const resultado = document.querySelector('#resultado')


let contador = 0


function contarCliques() {

    contador = contador + 1

    resultado.textContent = `Cliques: ${contador}`

}


button.addEventListener('click', contarCliques)