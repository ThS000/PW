const div = document.querySelector("#container");

const tasks = [
  { name: 'Estudar PW1', completed: false },
  { name: 'Revisar PW2', completed: true },
  { name: 'Preparar BD', completed: false }
];

div.innerHTML = "";

tasks.forEach((task) => {
    if(task.completed === false){
        div.innerHTML += `<div class="task-item">${task.name}</div>`
    } else {
        div.innerHTML += `<div class="task-item completed">${task.name}</div>`
    }
});

