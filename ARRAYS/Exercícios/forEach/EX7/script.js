const tasks = [
  { name: 'Estudar PW1', date: '2025-07-22', time: '08:00', duration: 90, completed: false },
  { name: 'Revisar PW2', date: '2025-07-23', time: '10:00', duration: 60, completed: true },
  { name: 'Preparar BD', date: '2025-07-24', time: '14:00', duration: 120, completed: false }
];

let html = '';

tasks.forEach((task) => {
    if(task.completed === false){
        html += `<div class="task-item"><span>${task.name}</span></div>`
    }
});

console.log(html)


