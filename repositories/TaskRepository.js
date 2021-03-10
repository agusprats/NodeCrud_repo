const Task = require('../models/Task');
const {getData, saveData} = require('../helpers/fileManager');

class TaskRepository {

    _tasks = null;

    constructor(){
        const data = getData();
        if (data) {
            this._tasks = data;            
        }
        else {
            this._tasks = [];
        }
    }

    /**
     * 
     * @returns The array of tasks
     */
    getAllTasks(){
        return this._tasks;
    }

    /**
     * 
     * @param {String} title
     */
    createTask(title){
        if (title=='') {
            throw new Error('Task must have a title to be created.');
            
        } else {
            const task = new Task(title);
            this._tasks.push(task);
            saveData(this._tasks);
        }
    }

    /**
     * 
     * @param {String} title 
     */
    deleteTask(title){
        let index = this.getTaskIndex(title);
        if (index!=-1) {            
            this._tasks.splice(index,1);
            saveData(this._tasks);
        }
        else{
            throw new Error('There is not a task with such a title.')
        }
    }
    
    /**
     * 
     * @param {String} title 
     */
    completeTask(title){
        let index = this.getTaskIndex(title);
        if (index!=-1) {            
            this._tasks[index].done=true;
            saveData(this._tasks);
        }
        else{
            throw new Error('There is not a task with such a title.')
        }
    }

    /**
     * 
     * @param {String} title
     * @returns The index of the task in the array whose title matches the one passed by parameter, if not found return -1
     */
    getTaskIndex(title){
        for (let i = 0; i < this._tasks.length; i++) {  
            if (this._tasks[i].title==title) {
                return i;                
            }            
        }
        return -1;
    }
}

module.exports = TaskRepository;