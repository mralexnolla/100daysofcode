let form = document.getElementById("form");
let textInput = document.getElementById("textInput");
let dateInput = document.getElementById("dateInput");
let textarea = document.getElementById("textarea");
let msg = document.getElementById("msg");
let tasks = document.getElementById("tasks");
let add = document.getElementById("add");

// Form validation

form.addEventListener("submit", (event)=>{
    event.preventDefault();
    formValidation();
});

let formValidation = () => {
    if(textInput.value === ""){
        console.log("Failure: text field cannot be null");
        msg.innerHTML = "Text Field cannot be blan";
    }else{
        console.log("Success")
        msg.innerHTML = ""; 

        acceptData();
        add.setAttribute("data-bs-dismiss", "modal");
        add.click();
        (()=>{
            add.setAttribute("data-bs-dismiss", "");
        })();
    }
}

// Accept data

let data = []

let acceptData = () => {
    data.push({
        text: textInput.value,
        date: dateInput.value,
        description: textarea.value,
    });

    localStorage.setItem("data", JSON.stringify(data));

    console.log(data);

    createTasks()
}

// create new task 

let createTasks = () => {
    tasks.innerHTML = "";
    data.map((x, y) => {
        return (
            tasks.innerHTML  += `
            <div id=${y}>
                <span class="fw-bold">${x.text}</span>
                <span class="small text-secondary">${x.date}</span>
                <p>${x.description}</p>

                <span class="options">
                    <i onClick= "editTask(this)" data-bs-toggle="modal" data-bs-target="#form" class="fas fa-edit"></i>
                    <i onClick ="deleteTask(this);createTasks()" class="fas fa-trash-alt"></i>
                </span>

            </div>
            `);
            console.log(y);
    });

    resetForm();
}

// reset the form 

let resetForm = () => {
    textInput.value = "";
    dateInput.value = "";
    textarea.value = "";
}

// Delete a task 

let deleteTask = (e) => {
    e.parentElement.parentElement.remove();  // this will delete the HTML element

    data.splice(e.parentElement.parentElement.id, 1); //this will remove the target from the data array

    localStorage.setItem("data", JSON.stringify(data));

    console.log(data);

}

//Edit a task 

let editTask = (e) => {
    let selectedtask = e.parentElement.parentElement;

    textInput.value = selectedtask.children[0].innerHTML;
    dateInput.value = selectedtask.children[1].innerHTML;
    textarea.value = selectedtask.children[2].innerHTML;

    deleteTask(e);
}

/*
    How to get data from local storage
    If you refresh the page, you'll note that all of your data is gone. 
    In order to solve that issue, we run a IIFE (Immediately invoked function expression) 
    to retrieve the data from local storage
*/

(() => {
    data = JSON.parse(localStorage.getItem("data")) || [];
    console.log(data);
    createTasks();
  })();


