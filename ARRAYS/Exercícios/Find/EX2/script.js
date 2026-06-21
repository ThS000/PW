const tasks = [
    {
        id: 301,
        title: "Treino de LLM",
        status: "pendente"
    },
    {
        id: 302,
        title: "Renderização",
        status: "pendente"
    },
    {
        id: 303,
        title: "Simulação",
        status: "pendente"
    }
];

const task = tasks.find((task) => {
    return task.id === 302;
});

console.log(task.title);

task.status = "em_execucao";

if (task.status === "em_execucao") {
    console.log("Tarefa iniciada com sucesso. ");
}

console.log(task);

