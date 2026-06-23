const form = document.querySelector('#form');
const container = document.querySelector('#container');
const tasks = [];

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const taskName = document.querySelector('#taskName').value;
    const taskDuration = Number(document.querySelector('#taskDuration').value);

    const task = {
        name: taskName,
        duration: taskDuration
    };

    tasks.push(task);

    container.innerHTML += `
        <div>
            <h3>${task.name}</h3>
            <p>${task.duration} min</p>
        </div>
    `;
});
  