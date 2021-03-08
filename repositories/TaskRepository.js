const Task = require('../models/task');

class TaskRepository {
    _tasks = null;

    constructor(){
        this._tasks = [];
    }

    getAllTask(){

    }
    createTask(title){
        const task = new Task(title);
        this._tasks.push(task);
        return this._tasks;
    }

    deleteTask(){

    }

    completeTask(){

    }

}