const form = document.querySelector("#form");
const input = document.querySelector("#nome");

form.addEventListener("submit" , (e) => {
    e.preventDefault();
    console.log(input.value); 
});