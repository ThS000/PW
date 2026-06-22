const nomes = ['Ana', 'Bruno', 'Carla', 'Diego'];

const indice = nomes.findIndex((nome) => {
    return nome === "Carla";
})

console.log(indice);