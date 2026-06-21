const gpus = [
    {
        id: 1,
        name: "RTX 4090",
        memory: 24,
        status: "livre"
    },
    {
        id: 2,
        name: "A100",
        memory: 40,
        status: "ocupada"
    },
    {
        id: 3,
        name: "RTX 4080",
        memory: 16,
        status: "livre"
    },
    {
        id: 4,
        name: "RTX 6000",
        memory: 48,
        status: "livre"
    }
];

const gpusLivres = gpus.filter((gpu) => {
    return gpu.status === "livre"
})

console.log(gpusLivres);

for (let i = 0; i < gpusLivres.length; i++){
    console.log(gpusLivres[i].name + "-" + gpusLivres[i].memory);
}

