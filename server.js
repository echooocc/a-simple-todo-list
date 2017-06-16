const server = require('socket.io')();
const firstTodos = require('./data');
const Todo = require('./todo');

// This is going to be our fake 'database' for this application
// Parse all default Todo's from db
const DB = firstTodos.map((t) => {
    // Form new Todo objects
    return new Todo(title = t.title);
});

server.on('connection', (client) => {
    // Sends a message to the client to reload all todos
    const reloadTodos = () => {
        console.log(DB);
        server.emit('load', DB);
    }

    // Accepts when a client makes a new todo
    client.on('make', (t) => {
        // Make a new todo
        const newTodo = new Todo(title = t.title);

        // Push this newly created todo to our database
        DB.push(newTodo);
        // Send the latest todos to the client
        index = DB.length - 1;
        server.emit('update', { t: newTodo, i: index });
    });

    // Accepts when a client deletes a todo
    client.on('remove', (t) => {
        // remove deleted todo from our database
        DB.splice(t.id, 1);
        reloadTodos();
    });

    // Accepts when a client remove all todo tasks
    client.on('removeAll', () => {
        // remove all todos from our database
        DB.splice(0);
        reloadTodos();
    });


    // Send the DB downstream on connect
    reloadTodos();
});

console.log('Waiting for clients to connect');
server.listen(3003);