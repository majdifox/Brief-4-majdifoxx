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


const addTaskBtn = document.querySelector("#addTaskBtn");

const taskModal = document.querySelector("#taskModal");

const closeModal = document.querySelector('#closeModal');




// array of tasks

let allTasks = [];

lastsubmit.addEventListener("click", () => {

    const taskName=document.getElementById('taskName').value;

    const dueDate=document.getElementById('dueDate').value;

    const taskStatus=document.getElementById('taskStatus').value;


    const description=document.getElementById('description').value;
    

    // let dueDate

    document.getElementById('name').textContent=taskName;
    taskModal.classList.add("hidden");

    document.getElementById('date').textContent=dueDate;
    taskModal.classList.add("hidden");

    document.getElementById('status').textContent=taskStatus;
    taskModal.classList.add("hidden");

    document.getElementById('description').textContent=description;
    taskModal.classList.add("hidden");
})



// const addTaskBtn = document.getElementById("addTaskBtn");

addTaskBtn.addEventListener("click",addfucntion);

function addfucntion(){

    taskModal.classList.remove("hidden");

}

closeModal.addEventListener("click",function(){
    
    taskModal.classList.add("hidden");
})

const submit = document.querySelector("#submit")

submit.addEventListener("click",createTask);

function createTask(){

   



}