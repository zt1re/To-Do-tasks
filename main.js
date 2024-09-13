const currentTasks = document.querySelector('#currentTasks');
const completedTasks = document.querySelector('#completedTasks');
const customPrompt = document.querySelector('#customPrompt');
const userInput = document.querySelector('#userInput');

function submitTask() {
    let taskLabel = userInput.value; 

    if (taskLabel.trim() === "") {
        alert("Please enter a task!"); 
        return;
    }

    const newTask = document.createElement('div');
    const newTaskcheckbox = document.createElement('input');
    const newTaskLabel = document.createElement('span');

    newTaskcheckbox.type = 'checkbox';
    newTaskLabel.textContent = taskLabel;

    newTaskcheckbox.addEventListener('change', () => {
        if (newTaskcheckbox.checked) {
            completedTasks.appendChild(newTask);
        }
        else {
            currentTasks.appendChild(newTask);
        }
    });

    newTask.appendChild(newTaskcheckbox);
    newTask.appendChild(newTaskLabel);
    currentTasks.appendChild(newTask);

    customPrompt.classList.remove('active');
    userInput.value = '';
};

userInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        submitTask();
    }
});

function showCustomPrompt() {
    customPrompt.classList.add('active');
}

function removeCustomPrompt() {
    customPrompt.classList.remove('active');
}