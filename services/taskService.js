const TaskRepository = require('../repositories/TaskRepository');
const taskRepository = new TaskRepository();

const getAllTasks = () => {
    const tasks = taskRepository.getAllTasks();
    return tasks.map(e => {
        return{
            title: e.title, 
            done: e.done
        };
    })     
}

const createTask = (title) => {
taskRepository.createTask(title);
}

module.exports = {
    getAllTasks,
    createTask
}