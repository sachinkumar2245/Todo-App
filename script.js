document.addEventListener('DOMContentLoaded', () => {

    const input = document.getElementById("todo-input");
    const addTaskButton = document.getElementById("add-task-btn");
    const todoList = document.getElementById("todo-list");

    let tasks = JSON.parse(localStorage.getItem('tasks')) ||  [];

    tasks.forEach(task => {
        renderTask(task)
        
    });

    addTaskButton.addEventListener("click", () => {
        const taskText = input.value.trim();
        // console.log(taskText)
        if (taskText == "") return;

        const newTask = {
            id: Date.now(),
            text: taskText,
            completed: false
        };

        tasks.push(newTask);
        saveTask();
        renderTask(newTask)
        input.value = ""; //clear input
        // console.log(task);

    });

    function renderTask(task) {
        const li = document.createElement('li');
        li.setAttribute('data-id', task.id);
        li.innerHTML = `
            ${task.text}
            <button>delete</button>
        `
        li.addEventListener('click', (e) =>{
            if(e.target.tagName === 'BUTTON') return;
            task.completed = !task.completed;
            li.classList.toggle("completed")
            saveTask();
        });

        li.querySelector('button').addEventListener('click', (e) =>{
            e.stopPropagation(); //prevent toggle from firing
            tasks = tasks.filter( t => t.id !== task.id);
            li.remove();
            saveTask();
        })
        todoList.appendChild(li);
    }

    function saveTask() {
        localStorage.setItem('tasks', JSON.stringify(tasks));

    }


})