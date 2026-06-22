const tasks = [
  { name: 'Estudar PW1', duration: 90 },
  { name: 'Revisar PW2', duration: 60 },
  { name: 'Preparar BD', duration: 150 }
];


const tarefasEmHoras = tasks.map((task) => {
    return {
        name: task.name,
        hours: (task.duration / 60).toFixed(1)
    };
});

console.log(tarefasEmHoras);