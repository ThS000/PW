const tasks = [
    {
        id: 101,
        title: "Treino de CNN",
        status: "pendente",
        priority: "alta"
    },
    {
        id: 102,
        title: "Renderização",
        status: "em_execucao",
        priority: "media"
    },
    {
        id: 103,
        title: "Simulação",
        status: "pendente",
        priority: "alta"
    },
    {
        id: 104,
        title: "Backup",
        status: "concluida",
        priority: "baixa"
    }
];

console.log("Total de tarefas: " + tasks.length);

const task = tasks.find((task) => {
    return task.id === 103;
});

console.log("Tarefa encontrada: " + task.title);

task.status = "em_execução";

task.assignedGpu = "RTX 4090";

tarefasPendentes = tasks.filter((task) => {
    return task.status === "pendente";
});

for(let i = 0; i < tarefasPendentes.length; i++){
    console.log(tarefasPendentes[i].title + " - " + tarefasPendentes[i].priority);
    if(tarefasPendentes[i].priority === "alta"){
        console.log("Prioridade máxima");
    }
};

console.log("Total de tarefas pendentes: " + tarefasPendentes.length);

console.log(task);

console.log(tasks);