const button = document.querySelector("#button");
const input = document.querySelector("#nome");

input.addEventListener("input", () => {
    const texto = input.value ;
    console.log(texto.toUpperCase());
});