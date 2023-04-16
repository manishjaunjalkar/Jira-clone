
function showmodal(){
    let modal = document.getElementById("modal-id");
    modal.style.display="flex";
};

let myTaskButton = document.querySelector("#add-task");
myTaskButton.addEventListener("click", (event)=>{
event.preventDefault();
let Taskname= document.getElementById("task").value;
let Priority = document.getElementById("priority").value;
let Date= document.getElementById("date").value;
let Status= document.getElementById("status").value;
 Addtask(Taskname, Priority, Date, Status)
 
 let modal = document.getElementById("modal-id");
 modal.style.display="none"
});
var count =1;
function  Addtask(Taskname, Priority, Date, Status){
   
    if(Status == "notstarted"){
        
        var column = document.getElementById("notstarted");
        
        column.innerHTML +=
                        `<li >
                        <p>${count}</p>
                        <p>${Taskname}</p>
                        <p>${Priority}</p>
                        <p>${Date}</p>
                        <p>${Status}</p>
                        </li>
                        `
                      count++; 
    }
    else if (Status == "in-progress"){
        var column = document.getElementById("in-progress");

        column.innerHTML +=
                        `<li >
                        <p>${count}</p>
                        <p>${Taskname}</p>
                        <p>${Priority}</p>
                        <p>${Date}</p>
                        <p>${Status}</p>
                        </li>`
                    count++;
    }
    else if(Status == "completed"){
        var column = document.getElementById("completed");

        column.innerHTML +=
                        `<li >
                        <p>${count}</p>
                        <p>${Taskname}</p>
                        <p>${Priority}</p>
                        <p>${Date}</p>
                        <p>${Status}</p>
                        </li>`
                        count++;
    }

    //  Taskname= document.getElementById("task").value="";
    //  Priority = document.getElementById("priority").value="";
    //  Date= document.getElementById("date").value="";
    //  Status= document.getElementById("status").value="";

     document.getElementById("form").reset();
}

