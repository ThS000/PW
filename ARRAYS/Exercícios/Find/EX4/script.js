const gpus = [
  { id: 1, name: "RTX 4090", status: "ocupada", power: 450, taskId: 101 },
  { id: 2, name: "RTX 6000", status: "ocupada", power: 300, taskId: 102 },
  { id: 3, name: "A100", status: "disponivel", power: 400, taskId: null },
];

const tasks = [
  { id: 101, name: "Treino IA", status: "em_execucao" },
  { id: 102, name: "Render", status: "em_execucao" },
];

function finishTask(gpuId) {
    const gpu = gpus.find((g) =>{
        return  g.id === gpuId;
    })

    const taskId = gpu.taskId;

    if (taskId === null) return;

    const task = tasks.find(t => t.id === taskId);

    if (task) {
        task.status = "concluida";
    }

    gpu.status = "disponivel";
    gpu.taskId = null;

    console.log("Tarefa finalizada");
}