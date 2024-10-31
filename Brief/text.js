



// let affiche=document.getElementById('test');
// let modal=document.getElementById('crud-modal');
// affiche.onclick=function(){

//  console.log(modal.classList.toggle('afficher'));
// }

// Task Management JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskModal = document.getElementById('taskModal');
    const closeModal = document.getElementById('closeModal');
    const taskForm = document.getElementById('taskForm');
    const tasksContainer = document.getElementById('tasksContainer');

    // Get tasks from localStorage or initialize empty array
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    let editingTaskId = null;

    // Event Listeners
    addTaskBtn.addEventListener('click', () => {
        editingTaskId = null;
        taskForm.reset();
        taskModal.classList.remove('hidden');
        taskModal.classList.add('show');
    });

    closeModal.addEventListener('click', () => {
        taskModal.classList.remove('show');
        taskModal.classList.add('hidden');
    });

    taskForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const task = {
            id: editingTaskId || Date.now(),
            name: document.getElementById('taskName').value,
            dueDate: document.getElementById('dueDate').value,
            status: document.getElementById('taskStatus').value,
            description: document.getElementById('description').value
        };

        if (editingTaskId) {
            tasks = tasks.map(t => t.id === editingTaskId ? task : t);
        } else {
            tasks.push(task);
        }

        // Save to localStorage
        localStorage.setItem('tasks', JSON.stringify(tasks));
        
        // Reset form and close modal
        taskForm.reset();
        taskModal.classList.remove('show');
        taskModal.classList.add('hidden');
        
        // Refresh tasks display
        renderTasks();
    });

    function createTaskElement(task) {
        const taskElement = document.createElement('ul');
        taskElement.className = 'mb-7 mt-7 list-disc border-2 border-purple-900 p-4 pl-6 bg-gradient-to-r from-cyan-500 to-blue-700';
        
        taskElement.innerHTML = `
            <li class="flex items-center justify-between">
                <h5 class="text-2xl font-medium mr-4">${task.name}</h5>
                <i class="fas fa-edit text-1xl mb-3 block dark:text-white bg-rose-700 rounded-lg p-1 cursor-pointer" 
                   onclick="editTask(${task.id})"></i>
            </li>
            <div class="flex items-center justify-between">
                <div>
                    <p class="font-bold">${task.description}</p>
                    <p class="text-1xl dark:text-white">Due Date: ${new Date(task.dueDate).toLocaleString()}</p>
                    <p class="text-1xl dark:text-white">Status: ${task.status}</p>
                </div>
                <i class="fas fa-trash-alt text-1xl mt-8 block dark:text-white bg-rose-700 rounded-lg p-1 cursor-pointer"
                   onclick="deleteTask(${task.id})"></i>
            </div>
        `;
        
        return taskElement;
    }

    function renderTasks() {
        tasksContainer.innerHTML = '';
        tasks.forEach(task => {
            tasksContainer.appendChild(createTaskElement(task));
        });
    }

    // Global functions for edit and delete
    window.editTask = function(taskId) {
        const task = tasks.find(t => t.id === taskId);
        if (task) {
            editingTaskId = taskId;
            document.getElementById('taskName').value = task.name;
            document.getElementById('dueDate').value = task.dueDate;
            document.getElementById('taskStatus').value = task.status;
            document.getElementById('description').value = task.description;
            taskModal.classList.remove('hidden');
            taskModal.classList.add('show');
        }
    };

    window.deleteTask = function(taskId) {
        if (confirm('Are you sure you want to delete this task?')) {
            tasks = tasks.filter(task => task.id !== taskId);
            localStorage.setItem('tasks', JSON.stringify(tasks));
            renderTasks();
        }
    };

    // Initial render
    renderTasks();
});