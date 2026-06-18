const button = document.querySelector("#button");
const input = document.querySelector("#nome");

button.addEventListener("click", () => {

    if (input.value.trim() === "") {
        console.log("O campo está vazio");
    } else {
        console.log("O campo tem texto");
    }
});