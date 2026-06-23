const button = document.querySelector("#btn");
const p = document.querySelector("#status");

button.addEventListener("click", (e) => {
    p.textContent = "Botão clicado";
});