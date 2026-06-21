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
        status: "livre"
    },
    {
        id: 3,
        name: "RTX 4080",
        memory: 16,
        status: "ocupada"
    }
];

const tasks = [
    {
        id: 101,
        title: "Treino de CNN",
        requiredMemory: 20
    },
    {
        id: 102,
        title: "Renderização",
        requiredMemory: 12
    },
    {
        id: 103,
        title: "Treino de LLM",
        requiredMemory: 32
    }
];

const task = tasks.find((task) => {
    return task.id === 103
}) 

const gpusLivres = gpus.filter((gpu) => {
    return gpu.status === "livre"
})

let compativeis = 0
for (let i = 0; i < gpusLivres.length; i++){
    console.log(gpusLivres[i].name + " - " + gpusLivres[i].memory);
    if (gpusLivres[i].memory >= task.requiredMemory){
        console.log("GPU compatível");
        compativeis++
    }
};

console.log("Total de compatíveis: " + compativeis);

const gpuId2 = gpus.find((gpu) => {
    return gpu.id === 2;
});

gpuId2.status = "ocupada";
gpuId2.currentTask = task.title;

console.log(gpuId2);

console.log(gpus);





