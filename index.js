const command = process.argv[2];
const params = process.argv.slice(3);
const TodoController = require('./controller/TodoController');

switch (command) {
    case "create":
        TodoController.create(params);
        break;
        
    case "read":
        TodoController.read();
        break;

    case "update":
        TodoController.update(params);
        break;

    case "delete":
        TodoController.delete(params);
        break;

    case "done":
        TodoController.done(params);
        break;

    default:
        TodoController.message("Masukkan inputan yang tepat!");
        break;
}