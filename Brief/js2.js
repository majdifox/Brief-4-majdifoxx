const addTaskBtn = document.querySelector("#addTaskBtn");

const taskModal = document.querySelector("#taskModal");

const closeModal = document.querySelector('#closeModal');

let count=0;


// click to Add Task Button so you can enter the modal

addTaskBtn.addEventListener("click",addfucntion);

function addfucntion(){

    taskModal.classList.remove("hidden");

}

// close the modal

closeModal.addEventListener("click",function(){
    
    taskModal.classList.add("hidden");
})



// add task
let allTasks = [];

let lastsubmitx = document.getElementById('lastsubmit');



lastsubmitx.onclick = function(){

    // to make sure the user fill all the form
    

    if (!taskName.value || !dueDate.value || !taskStatus.value || !description.value) {
        alert('Please fill in all fields!');
        return;
    }

    let taskData = {taskID:count++,
        
        taskName:taskName.value, 

        dueDate:dueDate.value,

        taskStatus:taskStatus.value,

        description:description.value,

        priority: taskPriority.value }

        if (editTaskId !== null) {
            // Update existing task
            const index = allTasks.findIndex(task => task.taskID === editTaskId);

            allTasks[index] = taskData;

            editTaskId = null;  
        } else {
            // Add new task
            allTasks.push(taskData);
        }
   console.log(allTasks)

   
   displayData()
   clearData()
   taskModal.classList.add("hidden");
}

// priority fucntion 

function getPriorityClass(priority) {
    switch(priority) {
        case 'p1':
            return 'bg-red-500 text-white';
        case 'p2':
            return 'bg-orange-500 text-white';
        case 'p3':
            return 'bg-green-500 text-white';
        default:
            return 'bg-gray-500 text-white';
    }
}

// clear data from the modal

function clearData(){

    taskName.value = '';
    dueDate.value = '';
    taskStatus.value = '';
    description.value = '';
    taskPriority.value = 'p3';
}



function displayData() {
    let taskElement = '';
    
    // task counter heading
    taskElement += `<h3 class="text-xl font-bold text-black mb-4">Total Tasks: ${allTasks.length}</h3>`;

    for(let i = 0; i < allTasks.length; i++) {
        taskElement += `<div class="mb-14">
        <div id="${allTasks[i].taskID}">
            <li class="flex items-center justify-between">
                <h5 class="text-2xl font-medium mr-4 dark:text-red-700 ">${allTasks[i].taskName}
                <span class="text-sm ml-2 px-2 py-1 rounded-full ${getPriorityClass(allTasks[i].priority)}"> ${allTasks[i].priority.toUpperCase()}
                </span>
                </h5>
                <button onclick="modifyTask(${allTasks[i].taskID})"i class="fas fa-edit text-1xl mb-3 block dark:text-white bg-rose-700 rounded-lg p-1 cursor-pointer"></i>
                </button>
            </li>
            <div class="flex items-center justify-between">
                <div>
                    <p class="font-bold">${allTasks[i].description}</p>
                    <p class="text-1xl dark:text-white">Due Date: ${allTasks[i].dueDate}</p>
                    <p class="text-1xl dark:text-white ">Status: ${allTasks[i].taskStatus}</p>
                </div>
                <button onclick="deleteTask(${allTasks[i].taskID})" class="fas fa-trash-alt text-1xl mt-8 block dark:text-white bg-rose-700 rounded-lg p-1 cursor-pointer hover:bg-rose-800 ">
                </button>
            </div></div>
            </div>
        `;
    }
    
    document.getElementById('tasksContainer').innerHTML = taskElement;
}

// Delete fucntion

function deleteTask(id) {
    
    allTasks = allTasks.filter(task => task.taskID !== id);
    
    
    allTasks = allTasks.map((task, index) => ({
        ...task,
        taskID: index
    }));
    
    
    count = allTasks.length;
    
    displayData();
}

// modify function

let editTaskId = null;

function modifyTask(id)
{
    editTaskId = id;
    const task = allTasks.find(task => task.taskID === id);

    taskName.value = task.taskName;
    dueDate.value = task.dueDate;
    taskStatus.value = task.taskStatus;
    description.value = task.description;
    taskPriority.value = task.priority;

    taskModal.classList.remove("hidden");

    // console.log(id)
}
