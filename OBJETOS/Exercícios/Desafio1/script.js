const servidores = [
    {
        id: 1,
        nome: "Servidor Alpha",
        gpu: {
            nome: "RTX 4090",
            memoria: 24
        },
        status: "livre"
    },

    {
        id: 2,
        nome: "Servidor Beta",
        gpu: {
            nome: "A100",
            memoria: 40
        },
        status: "ocupado"
    },

    {
        id: 3,
        nome: "Servidor Gamma",
        gpu: {
            nome: "RTX 4080",
            memoria: 16
        },
        status: "livre"
    }
];

console.log(servidores[0].gpu.nome);

console.log(servidores[1].gpu.memoria);

servidores[2].status = "ocupado";

servidores[0].gpu.temperatura = 72;

for (let i = 0; i < servidores.length; i++) {
    console.log(servidores[i].nome + " - " + servidores[i].gpu.nome + " - " + servidores[i].status);
      if(servidores[i].gpu.memoria > 20){
            console.log("GPU de alta capacidade");
        }
}




