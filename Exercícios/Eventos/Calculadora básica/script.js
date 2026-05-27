const input1 = document.querySelector('#numero1-input')
const input2 = document.querySelector('#numero2-input')
const buttonSoma = document.querySelector('#somar-btn')
const buttonSub = document.querySelector('#subtrair-btn')
const buttonMult = document.querySelector('#multiplicar-btn')
const buttonDiv = document.querySelector('#dividir-btn')
const resultado = document.querySelector('#resultado')

function somar(){
    
    const numero1 = Number(input1.value)
    const numero2 = Number(input2.value)

    const soma = numero1 + numero2
    resultado.textContent =` Resultado: ${soma}`
}

function subtrair(){
    
    const numero1 = Number(input1.value)
    const numero2 = Number(input2.value)

    const subtrair = numero1 - numero2
    resultado.textContent =` Resultado: ${subtrair}`
}

function multiplicar(){
    
    const numero1 = Number(input1.value)
    const numero2 = Number(input2.value)

    const multiplicar = numero1 * numero2
    resultado.textContent =` Resultado: ${multiplicar}`
}

function dividir(){
    
    const numero1 = Number(input1.value)
    const numero2 = Number(input2.value)

    const dividir = numero1 / numero2
    resultado.textContent =` Resultado: ${dividir}`
}
buttonSoma.addEventListener('click', somar);
buttonSub.addEventListener('click', subtrair);
buttonMult.addEventListener('click', multiplicar);
buttonDiv.addEventListener('click', dividir);

