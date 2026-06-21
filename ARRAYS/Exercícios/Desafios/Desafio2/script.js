const gpus = [
    {
        id: 1,
        name: "RTX 4090",
        status: "livre"
    },
    {
        id: 2,
        name: "A100",
        status: "ocupada"
    },
    {
        id: 3,
        name: "RTX 4080",
        status: "livre"
    }
];

const gpu = gpus.find((gpu) => {
    return gpu.id === 1;
});

gpu.status = "Ocupada";

console.log(gpus);

console.log(gpus[0].status);

