const server = io('http://localhost:3003/');
const list = document.getElementById('todo-list');
const completeDiv = document.getElementById('complete-todos');
const completeList = document.getElementById('complete-todo-list');

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

function deleteAll() {
    console.warn(event);
    server.emit('removeAll');
}

function completeTodo(id) {
    console.warn(event);
    server.emit('complete', {
        id: id
    });
}

function completeAll() {
    console.warn(event);
    server.emit('completeAll');
}

function render(todo, index) {
    const listItem = document.createElement('li');
    const listItemText = document.createTextNode(todo.title);
    listItem.setAttribute('id', index);

    const completeButton = document.createElement('button');
    completeButton.appendChild(document.createTextNode("v"));
    completeButton.setAttribute('onClick', 'completeTodo("' + index + '")');

    const removeButton = document.createElement('button');
    removeButton.appendChild(document.createTextNode("x"));
    removeButton.setAttribute('onClick', 'deleteTodo("' + index + '")');

    listItem.appendChild(listItemText);
    listItem.appendChild(removeButton);
    listItem.appendChild(completeButton);
    list.append(listItem);
}

function renderDone(todo, index) {
    const listItem = document.createElement('li');
    const listItemText = document.createTextNode(todo.title);
    listItem.appendChild(listItemText);
    completeList.append(listItem);
    completeDiv.appendChild(completeList);
}

// This event is for (re)loading the new added todos from the server
server.on('update', (todo) => {
    console.log(todo);
    render(todo.t, todo.i);
});

// NOTE: These are listeners for events from the server
// This event is for (re)loading the entire list of todos from the server
server.on('load', (todos) => {
    console.log(todos.ing);
    console.log(todos.done);
    list.innerHTML = '';
    completeList.innerHTML = '';
    completeDiv.innerHTML = '';
    if (todos.done.length !== 0) {
        const listTitle = document.createElement('h2');
        const listTitleText = document.createTextNode('complete tasks');
        listTitle.appendChild(listTitleText);
        completeDiv.appendChild(listTitle);
    }
    todos.ing.forEach((todo, index) => render(todo, index));
    todos.done.forEach((todo, index) => renderDone(todo, index));
});