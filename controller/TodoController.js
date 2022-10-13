const Todo = require('../model/Todo');
const TodoView = require('../view/TodoView');

class TodoController {
    static create(todo_data){
        Todo.create(todo_data);
    }
    
    static read(){
        let todos = Todo.read();

        TodoView.read(todos);
    }
    
    static update(todo_data){
        Todo.update(todo_data);
    }
    
    static delete(todo_data){
        Todo.delete(todo_data);
    }
    
    static message(msg_content){
        TodoView.message(msg_content);
    }

    static done(todo_data){
        Todo.done(todo_data);
    }

}

module.exports = TodoController;