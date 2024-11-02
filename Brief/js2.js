// let taskName = document.getElementById('taskName');
// let dueDate = document.getElementById('dueDate');
// let taskStatus = document.getElementById('taskStatus');
// let description = document.getElementById('description');
// let submit = document.getElementById('submit');

// console.log(taskName,dueDate,taskStatus,description,document,submit    );


// let allTasks = [];

// submit.onclick = function(){

//     let newTask = {

//         taskName:taskName.value, /////

//         dueDate:dueDate.value,

//         taskStatus:taskStatus.value,

//         description:description.value,

//     }
//     taskData.push(newTask)
//     console.log(newTask)
// }   




// const submit = document.querySelector("#submit")

// submit.addEventListener("click",createTask);

// function createTask(){




// }

// array of tasks






// lastsubmit.addEventListener("click", () => {

//     const taskName=document.getElementById('taskName').value;

//     const dueDate=document.getElementById('dueDate').value;

//     const taskStatus=document.getElementById('taskStatus').value;


//     const file=document.getElementById('description').value;
    

   

//     document.getElementById('name').textContent=taskName;
//     taskModal.classList.add("hidden");

//     document.getElementById('date').textContent=dueDate;
//     taskModal.classList.add("hidden");

//     document.getElementById('status').textContent=taskStatus;
//     taskModal.classList.add("hidden");

//     document.getElementById('gl').textContent=file;
//     taskModal.classList.add("hidden");
// })



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

    let taskData = {taskID:count++,
        
        taskName:taskName.value, 

        dueDate:dueDate.value,

        taskStatus:taskStatus.value,

        description:description.value,}

    allTasks.push(taskData);

    // localStorage.setItem
   console.log(allTasks)

   clearData()
   displayData()
}


// clear data from the modal

function clearData(){

    taskName.value = '';
    dueDate.value = '';
    taskStatus.value = '';
    description.value = '';

}


// Display Data 

// function displayData(){

//     let taskElement = '';
    
//     for(let i=0; i < allTasks.length; i++ )
//     {

//         taskElement += `
//             <li class="flex items-center justify-between">
//                 <h5 class="text-2xl font-medium mr-4">${task.name}</h5>
//                 <i class="fas fa-edit text-1xl mb-3 block dark:text-white bg-rose-700 rounded-lg p-1 cursor-pointer" 
//                    onclick="editTask(${task.id})"></i>
//             </li>
//             <div class="flex items-center justify-between">
//                 <div>
//                     <p class="font-bold">${task.description}</p>
//                     <p class="text-1xl dark:text-white">Due Date: ${new Date(task.dueDate).toLocaleString()}</p>
//                     <p class="text-1xl dark:text-white">Status: ${task.status}</p>
//                 </div>
//                 <i class="fas fa-trash-alt text-1xl mt-8 block dark:text-white bg-rose-700 rounded-lg p-1 cursor-pointer"
//                    onclick="deleteTask(${task.id})"></i>
//             </div>
//         `;
        

//     }

//     document.getElementById('addedTask').innerHTML = taskElement;
    
// }

function displayData() {
    let taskElement = '';
    
    for(let i = 0; i < allTasks.length; i++) {
        taskElement += `<div id="${allTasks[i].taskID}">
            <li class="flex items-center justify-between">
                <h5 class="text-2xl font-medium mr-4">${allTasks[i].taskName}</h5>
                <i class="fas fa-edit text-1xl mb-3 block dark:text-white bg-rose-700 rounded-lg p-1 cursor-pointer"></i>
            </li>
            <div class="flex items-center justify-between">
                <div>
                    <p class="font-bold">${allTasks[i].description}</p>
                    <p class="text-1xl dark:text-white">Due Date: ${allTasks[i].dueDate}</p>
                    <p class="text-1xl dark:text-white">Status: ${allTasks[i].taskStatus}</p>
                </div>
                <button onclick="deleteTask(${allTasks[i].taskID})" class="fas fa-trash-alt text-1xl mt-8 block dark:text-white bg-rose-700 rounded-lg p-1 cursor-pointer hover:bg-rose-800">
                </button>
            </div></div>
        `;
    }
    
    document.getElementById('tasksContainer').innerHTML = taskElement;
}

// Delete fucntion

function deleteTask(id)
{

    allTasks.splice(id,1);
    displayData()
}