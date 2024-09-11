const currentTasks = document.querySelector('#currentTasks');
const completedTasks = document.querySelector('#completedTasks');
const customPrompt = document.querySelector('#customPrompt');

const submitTask = () => {
    const taskLabel = userInput.value; 

    if (taskLabel.trim() === "") {
        alert("Please enter a task!"); 
        return;
    }

    const newTask = document.createElement('div');
    const newTaskcheckbox = document.createElement('input');
    const newTaskLabel = document.createElement('span');

    newTaskcheckbox.type = 'checkbox';
    newTaskLabel.textContent = taskLabel;

    newTaskcheckbox.addEventListener('click', () => {
        completedTasks.appendChild(newTask);
        currentTasks.removeChild(newTask);
    });

    newTask.appendChild(newTaskcheckbox);
    newTask.appendChild(newTaskLabel);
    currentTasks.appendChild(newTask);

    customPrompt.classList.remove('active');

};

submit.addEventListener('click', submitTask);


function showCustomPrompt() {
    customPrompt.classList.add('active');
}

function removeCustomPrompt() {
    customPrompt.classList.remove('active');
}