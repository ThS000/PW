const divPendentes = document.querySelector("#pendentes");
const divConcluidas = document.querySelector("#concluidas");

const tasks = [
  { name: 'Estudar PW1', date: '2025-07-22', time: '08:00', duration: 90, completed: false },
  { name: 'Revisar PW2', date: '2025-07-23', time: '10:00', duration: 60, completed: true },
  { name: 'Preparar BD', date: '2025-07-24', time: '14:00', duration: 120, completed: false }
];

function renderTasks(container, completed = false) {
    container.innerHTML = '';

    const filtradas = tasks.filter((task) => 
        task.completed === completed);

    filtradas.forEach((task) => {
    container.innerHTML += `
        <div class="${task.completed ? 'task-item completed' : 'task-item'}">
            <span class="task-name">${task.name}</span>
            <span>${task.duration} minutos</span>
        </div>
    `;
});
}

const pendentes = document.querySelector('#pendentes');
const concluidas = document.querySelector('#concluidas');
renderTasks(pendentes, false);
renderTasks(concluidas, true);