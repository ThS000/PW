const input = document.querySelector("#inputTarefa");
const button = document.querySelector("#btnAdicionar");
const ul = document.querySelector("#lista");

const arrayVazio = [];

button.addEventListener("click", () => {

  ul.innerHTML = "";

  const valorInput = input.value;

  arrayVazio.push(valorInput);

  input.innerHTML = "";
});