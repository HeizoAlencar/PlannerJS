

const ToDoList = document.querySelector(".TaskList")


function ChangeStatus(el,dis){
    var display = document.getElementById(el).style.display
    if(display == "none"){
        document.getElementById(el).style.display = dis
    }
    else {
        document.getElementById(el).style.display = 'none'
    }
}



TaskList = []

Task = {}

function addTask(){
    Task.Name = document.getElementById('TaskName').value
    Task.Description = document.getElementById('TaskDescription').value;
    if(Task.Name != "" && Task.Description !=""){
        TaskList.push(Task) 
        console.log("Tarefa adicionada com sucesso!")
        ChangeStatus('menu-add-task', 'none');
        document.getElementById('TaskName').value = "";
        document.getElementById('TaskDescription').value = "";
    }
    else{
        alert("Preencha todos os campos")
    }

    console.log(TaskList[1]);
    ShowTasks()
}



function ShowTasks(){
let NewTask

TaskList.forEach(Task => {
    NewTask = NewTask + `<li>
    <div class='Task' >
        <div class='Task-content'>
        <h2>
            ${Task.Name}
        </h2>
        <p>
            ${Task.Description}
        </p>
        </div>
        <i id="CloseButton" class="fa-solid fa-trash"></i>
    </div>
</li>`
});

ToDoList.innerHTML = NewTask;

}


