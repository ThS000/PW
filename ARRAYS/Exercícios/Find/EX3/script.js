const gpus = [
  { id: 1, name: "RTX 4090", status: "ocupada", power: 450 },
  { id: 2, name: "RTX 6000", status: "ocupada", power: 300 },
  { id: 3, name: "A100", status: "disponivel", power: 400 },
];

const tasks = [
  { id: 101, name: "Treino IA", status: "em_execucao" },
  { id: 102, name: "Render", status: "em_execucao" },
];

function finishGpu(gpuId){
    const gpuID2 = gpus.find((gpu) => {
        return gpu.id === gpuId
    });

    gpuID2.status = "disponivel";

    console.log("GPU liberada")
};

finishGpu(1);