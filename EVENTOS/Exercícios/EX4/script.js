const button = document.querySelector("#button");

let contador = 0;

button.addEventListener("click", () => {
    contador++;
    console.log(contador);
});