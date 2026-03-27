//Load tasks from local storage or start empty
let tasks=JSON.parse(localStorage.getItem("tasks"))||[];
//Add tasks
function addTask(){
    let input=document.getElementById("taskInput").value;
    if(input===""){
        alert("Please enter a task");
        return;
    }
    //Add as object
    tasks.push({
        text:input,
        done:false
    });
    //Save
    localStorage.setItem("tasks",JSON.stringify(tasks));
    //Clear input
    document.getElementById("taskInput").value="";
    //Refresh display
    displayTasks();
}
//Display tasks
function displayTasks(){
    let list=document.getElementById("taskList");
    list.innerHTML="";
    for(let i=0;i<tasks.length;i++){
        list.innerHTML +=`
        <li onclick="toggleTask(${i})" class="${tasks[i].done?"done":""}"
        style="display:flex;justify-content:space-between;
        align-items:center;">
        <span>${tasks[i].text}</span>
        <div>
        <button onclick="editTask(${i});event.stopPropagation();">Edit</
        button>
        <button onclick="deleteTask(${i});event.stopPropagation();">Delete</
        button>
        </div>
        </li>
        `;
    }
}
//Delete task
function deleteTask(index){
    tasks.splice(index,1);
    //Save after delete
    localStorage.setItem("tasks",JSON.stringify(taks));

    displayTasks();
}
//Toggle completed
function toggleTask(index){
    tasks[index].done=!tasks[index].done;
    //Save after toggle
    localStorage.setItem("tasks",JSON.stringify(tasks));

    displayTasks();
}
//Edit task
function editTask(index){
    let newText=prompt("Edit your task:",tasks[index].text);
    if(newText===null||newText===""){
        return;
    }
    tasks[index].text=newText;
    localStorage.setItem("tasks".JSON.stringify(tasks));
    displayTasks();
}
//Run when page loads
displayTasks();
localStorage.clear();