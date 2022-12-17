// form validation

let form = document.getElementById('form');
let input = document.getElementById('input');
let msg = document.getElementById('msg');
let posts = document.getElementById('posts');

form.addEventListener("submit", (event)=>{
    event.preventDefault();
    console.log("button clicked");

    formValidation();
});

let formValidation = () => {
    if(input.value === ""){
        msg.innerHTML = "Post cannot be blank"
        console.log("failure: Blank Post not aloud")
    }else{
        console.log("success");
        msg.innerHTML = "";
        acceptData()
    }
};

// Accepting data from input 
/* Here what ever we get from input we store in an object called data and  
use the function acceptdata to accept the data*/

let data = {};

let acceptData = () => {
    data["text"] = input.value;
    console.log(data);
    createPost()
}

//How to create post 

let createPost = () => {
    posts.innerHTML += `
     
        <div>
            <p>${data.text}</p>
            <span class="options">
                <i onClick="editPost(this)" class="fas fa-edit"></i> 
                <i onClick="deletePost(this)" class="fas fa-trash-alt"></i>
            </span>
        </div>
                
    `;
    input.value = "";
};


//How to delete a post 

/*
Look carefully, the parent of the delete button is the span with class name options. 
The parent of the span is the div. So, we write parentElement twice so that we can jump from the delete 
icon to the div and target it directly to remove it.

The this keyword refers to the fired the event onClick, this case the delete button
*/

let deletePost = (event) => {
    event.parentElement.parentElement.remove();
}


//How to edit a post

/*
 Look carefully, the parent of the edit button is the span with class name options. 
 The parent of the span is the div. So, we write parentElement twice so that we can 
 jump from the edit icon to the div and target it directly to remove it.

 The this keyword refers to the fired the event onClick, this case the edit button
*/

let editPost = (event) => {
    input.value = event.parentElement.previousElementSibling.innerHTML;
    event.parentElement.parentElement.remove();
}


