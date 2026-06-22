const tasks = [
  { name: 'Estudar PW1', duration: 90, completed: false },
  { name: 'Revisar PW2', duration: 60, completed: false },
  { name: 'Preparar BD', duration: 120, completed: false }
];

const indiceRevisar = tasks.findIndex((task) => {
    return task.name === 'Revisar PW2';
});

tasks[indiceRevisar].completed = true;

const indiceBD = tasks.findIndex((task) => {
    return task.name === 'Preparar BD';
});

tasks.splice(indiceBD, 1);

console.log(tasks);

