const tasks = [
  { name: 'Estudar PW1', duration: 90, completed: false },
  { name: 'Revisar PW2', duration: 60, completed: true },
  { name: 'Preparar BD', duration: 120, completed: false },
  { name: 'Estudar POO', duration: 45, completed: true }
];
let totalDuration = 0

tasks.forEach((task) => {
    if(task.completed === false){
        totalDuration += + task.duration
    }
});

console.log("Total de minutos de tarefas pendentes:" + totalDuration);
