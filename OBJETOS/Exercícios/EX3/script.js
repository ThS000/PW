const gpu = {
    id: 1,
    name: "RTX 4090",
    memory: 24,
    power: 450,
    status: "disponivel"
};

console.log(gpu.name);

console.log(gpu.memory);

console.log("A GPU " + gpu.name + " possui " + gpu.memory + "GB de memória. ");

gpu.status = "ocupada";

gpu.currentTask = "Treino de LLM"

console.log("A GPU " + gpu.name + " está ocupada executando a tarefa " + gpu.currentTask + "." );

gpu.temperature = 70;

if (gpu.temperature > 70 ) {
    console.log("Alerta: temperatura elevada.");
}

console.log(gpu);

