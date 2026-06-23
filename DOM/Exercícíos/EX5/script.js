const ul = document.querySelector("#lista");

const nomes = ['Ana', 'Bruno', 'Carla'];

ul.innerHTML = "";

nomes.forEach ((nome) => {
    ul.innerHTML += `<li>${nome}</li> `;
});