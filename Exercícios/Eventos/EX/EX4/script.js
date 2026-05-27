const input = document.querySelector('#idade-input')
const button = document.querySelector ('#verificar-btn')
const resultado = document.querySelector('#resultado')

function verificarIdade (){
    const idade = Number(input.value)

    if(idade >= 18){
        resultado.textContent = 'Maior de idade'
    } else {
        resultado.textContent = 'Menor de idade'
    }
}
button.addEventListener('click', verificarIdade);



