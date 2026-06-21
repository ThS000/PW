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

console.log("Total de GPUs: " + gpus.length);

const gpu3 = gpus.find((gpu) => {
    return gpu.id === 3;
});

console.log(gpu3.name);

gpu3.status = "ocupada";

console.log(gpu3);

const gpusLivres = gpus.filter((gpu) => {
    return gpu.status === "livre";
});

for (let i = 0; i < gpusLivres.length; i++) {
    console.log(gpusLivres[i].name + " - " + gpusLivres[i].memory);

    if (gpusLivres[i].memory >= 40) {
        console.log("GPU indicada para IA pesada");
    }
}

gpu3.temperature = 75;

if (gpu3.temperature >= 75) {
    console.log("Alerta de temperatura elevada.");
}

console.log(gpus);