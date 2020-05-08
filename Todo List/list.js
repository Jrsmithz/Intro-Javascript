var todos = [];

var input = prompt('What would you like to do?');

while (input !== 'quit'){

    // Handle input
    if( input === "list"){
        listTodos();
    }
    
    else if (input === "new"){
        NewTodos();
    }
    else if (input === "delete"){
        DeleteTodos();
    }
    // Ask for new input.
    var input = prompt('What would you like to do?');
}

console.log ("Ok, You quit the app");

function listTodos(){
    console.log("****************")
    todos.forEach(function(todo, i){
    console.log(i + ": " + todo);
    })
    console.log("****************")
}

function NewTodos(){
    // Ask for new todo.
    var newTodo = prompt('Enter new todo');
    // add to todos array.
    todos.push(newTodo);
}

function DeleteTodos(){
     // Ask for the index of todo to be deleted.
     var index = prompt('Enter index of todo to delete');
     // Delete that to do.
    todos.splice(index,1);
    // Respond with deleted.
    console.log("Deleted Todo")
    }
