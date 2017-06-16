const server = io('http://localhost:3003/');
const list = document.getElementById('todo-list');

// NOTE: These are all our globally scoped functions for interacting with the server
// This function adds a new todo from the input
function add() {
    console.warn(event);
    const input = document.getElementById('todo-input');
    if (input.value.length !== 0) {
        // Emit the new todo as some data to the server
        server.emit('make', {
            title: input.value
        });
        // Clear the input
        input.value = '';
        // TODO: refocus the element
    }
}

function deleteTodo(id) {
    console.warn(event);
    server.emit('remove', {
        id: id
    });
}

function render(todo, index) {
    const listItem = document.createElement('li');
    const listItemText = document.createTextNode(todo.title);
    listItem.setAttribute('id', index);

    const removeButton = document.createElement('button');
    removeButton.appendChild(document.createTextNode("x"));
    removeButton.setAttribute('onClick', 'deleteTodo("' + index + '")');

    listItem.appendChild(listItemText);
    listItem.appendChild(removeButton);
    list.append(listItem);
}

// This event is for (re)loading the new added todos from the server
server.on('update', (todo) => {
    console.log(todo);
    render(todo.t, todo.i);
});

// NOTE: These are listeners for events from the server
// This event is for (re)loading the entire list of todos from the server
server.on('load', (todos) => {
    console.log(todos);
    list.innerHTML = '';
    todos.forEach((todo, index) => render(todo, index));
});