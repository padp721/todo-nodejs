const fs = require('fs');

class Todo {
    constructor (id, task, status){
        this.id = id;
        this.task = task;
        this.status = status || false;
    }

    static getTodos() {
        let data = fs.readFileSync('./data.json','utf8');
        let parsedData = JSON.parse(data);
        let todos = parsedData.map(todo => {
            const {id, task, status} = todo;
            return new Todo(id, task, status);
        })

        return todos;
    }

    static saveTodos(data){
        fs.writeFileSync('./data.json', JSON.stringify(data, null, 3));
    }

    static create(todo_data) {
        let todos = this.getTodos();
        let id = todos[todos.length-1].id + 1;
        let temp = new Todo(id, todo_data[0]);
        todos.push(temp)
        this.saveTodos(todos);
    }

    static read() {
        let todos = this.getTodos();
        return todos;
    }

    static update(todo_data) {
        let todos = this.getTodos();
        let id = Number(todo_data[0]);
        let task = todo_data[1];

        todos = todos.map(todo => {
            if (todo.id === id) {
                todo.task = task;
            }
            return todo;
        })
        this.saveTodos(todos);
    }
    
    static delete(todo_data) {
        let todos = this.getTodos();
        let id = Number(todo_data[0]);
        todos = todos.filter(todo => todo.id !== id);
        this.saveTodos(todos);
    }
    
    static done(todo_data) {
        let todos = this.getTodos();
        let id = Number(todo_data[0]);

        todos = todos.map(todo => {
            if (todo.id === id) {
                todo.status = true;
            }
            return todo;
        })
        this.saveTodos(todos);
    }
}

module.exports = Todo;