const button = document.querySelector("#btnAdicionar");
const input = document.querySelector("#produto");
const produtos = [];

button.addEventListener("click", () => {
    const texto = input.value;
    produtos.push(texto);
    console.log(produtos);
    input.value = "";
});