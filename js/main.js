const Task = {
    name : "",
    description : "",
}


function addTaskMenu(status){
    var $menu = document.getElementById("menu-add-task").style.display;
    if(status == 1){
        $menu = "none;"    
    }
    else if(status==2){
        $menu = "block";
    } 
    
}

function addTask(){

    let taskName = document.getElementById("task" + "name").value;
    let taskDescription = document.getElementById("task" + "description").value;
    Task["name"] =  taskName;
    Task["description"] = taskDescription;
    
}


console.log(Task.name);