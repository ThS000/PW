const nomes = ['Ana', 'Bruno', 'Carla'];
let html = '';

nomes.forEach((nome) => {
    html += `<li>${nome}</li>`;
});

console.log(html);

