const texto = document.querySelector('#texto')
const button1 = document.querySelector('#verde-btn')
const button2 = document.querySelector('#vermelho-btn')

function mudarVerde() {
    texto.style.color = 'green'
}

function mudarVermelho() {
    texto.style.color = 'red'
}
button1.addEventListener('click', mudarVerde)
button2.addEventListener('click', mudarVermelho)
