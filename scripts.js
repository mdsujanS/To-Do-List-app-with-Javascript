// document.addEventListener('DOMContentLoaded', loadTask);

// function loadTask(){
//     let task = JSON.parse(localStorage.getItem('tasks')) || [];
//     task.foreach(ta => addTaskToDome(ta));
// }

function addTask(){
    let inputText = document.getElementById('inputTask');
    let text = inputText.value;
    console.log(text);

    addTaskToDome(text);
    saveTask(text);


}

// save to local storage
function saveTask(input_text){
    let all_task = JSON.parse(localStorage.getItem('tasks')) || [];
    all_task.push(input_text);
    localStorage.setItem("tasks" , JSON.stringify(all_task));

    // set null value in input
    let inputText = document.getElementById('inputTask');
    inputText.value = "";
}

function addTaskToDome(input_text){
    let ul = document.getElementById('List-task');
    console.log(ul);
    let li = document.createElement('li');
    li.innerHTML = `
        <span> ${input_text}</span>;
        <span><button onclick="deleteTask(this)">Submit</button></span>
    `
    ul.appendChild(li);

}

function deleteTask(element){
    let li = element.parentElement.parentElement;
    let text = li.firstElementChild.innerText;

    li.remove()

    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks_filter = tasks.filter(task => task !== text);
    localStorage.setItem("tasks", JSON.stringify(tasks_filter));

}