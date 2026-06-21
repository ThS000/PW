const gpu = {
    nome: "RTX 4090",
    memory: 24,
    status: "livre"
};

console.log(gpu.nome);
console.log(gpu.memory);
console.log("A gpu está " + gpu.status);

gpu.status = "ocupada";

console.log("A gpu está " + gpu.status);

