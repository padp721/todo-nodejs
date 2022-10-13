const { Console } = require("console");

class TodoView {
    static read(todos){
        console.log("Todo List :");
        todos.forEach(todo => {
            const {id, task, status} = todo;

            if (status) {
                console.log(`${id}. [X] ${task}`);
            } else {
                console.log(`${id}. [ ] ${task}`);
            }

        });
    }
    
    static message(msg_content) {
        console.log(msg_content);
    }
}

module.exports = TodoView;