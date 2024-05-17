let todoInput = document.querySelectorAll(".newTodo");
let allTodos = []
let todoItems = document.querySelectorAll(".todoList");
let addBtn = document.querySelectorAll(".add-btn");
function add() {

    let todoVal = todoInput[0].value;
    allTodos.push(todoVal);
    printAlltodos();
    todoInput[0].value = "";

}

function printAlltodos() {
    
    
    let todoItem = todoItems[0];
    todoItem.innerHTML="";
    for(let i=0;i<allTodos.length;i++){
        todoItem.innerHTML += `
        <p id=todoPara${[i]}>
        ${allTodos[i]}
        <button onclick="editTodo(${i})">Edit</button>
        <button onclick="deleteTodo(${i})">Delete</button>
        </p>
        `
    }
    
}
function editTodo(index) {
    let todoVal = allTodos[index]; 
    todoInput[0].value = todoVal; 
    addBtn[0].innerHTML = "Update"; 
    addBtn[0].onclick = function() { 
        updateTodo(index); 
    };
}

function updateTodo(index) {
    allTodos[index] = todoInput[0].value; 
    printAlltodos(); 
    addBtn[0].innerHTML = "Add"; 
    todoInput[0].value = "";
    addBtn[0].onclick = add;
}

function deleteTodo(index){
    // console.log(index);
    allTodos.splice(index,1);
    printAlltodos();
}