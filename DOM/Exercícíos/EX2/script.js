const input = document.querySelector("#inputTarefa");
const button = document.querySelector("#btnAdicionar");
const lista = document.querySelector("#lista");

button.addEventListener ("click", () => {
  const valor = input

   const li = document.createElement("li");
  li.textContent = valor;

  lista.appendChild(li);

  input.value = "";
});
