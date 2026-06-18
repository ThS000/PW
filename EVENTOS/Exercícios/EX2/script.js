const button = document.querySelector("#button");
const input = document.querySelector("#input");

function clicou() {
    console.log(input.value);
}

button.addEventListener("click", clicou);