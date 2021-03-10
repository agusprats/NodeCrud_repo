const {inquirerMenu, inquirerInput} =  require('./helpers/inquirer');
const {getAllTasks, createTask} = require('./services/taskService');
//const TaskRepository = require('./repositories/TaskRepository');
const inquirer = require('inquirer');
const colors = require('colors');
const Choices = require('inquirer/lib/objects/choices');

const main = async() => {
    //const taskRepository = new TaskRepository();    
    let salir = false;
    while(!salir)
    {
        const option = await inquirerMenu();
        switch (option) {
            case 1:
                try {
                    console.clear();
                    const title = await inquirerInput('Enter Task title:');
                    console.clear();
                    createTask(title); //taskRepository.createTask(title);    
                                    
                } catch (error) {
                    console.log(error.message.red);                    
                }
                break;
            case 2: 
                const allTasks = getAllTasks(); //taskRepository.getAllTasks();
                console.clear();              
                if (allTasks.length==0) {
                    console.log('« Tasks list is empty »'.gray);                    
                } else {
                    console.log('« Tasks list »'.yellow);
                    for (let i = 0; i < allTasks.length; i++) {
                        const task = allTasks[i];
                        let status = '';
                        if (task.done) {
                            status='[COMPLETED]'.green;
                        } else {
                            status='[PENDIENT]'.gray;
                        }
                        const taskText = `${i+1}. ${task.title} ${status}`;
                        console.log(` ${taskText}`);
                    }                      
                }              
                break;
            case 3:
                console.clear();
                const titleDelete = await tasksList(taskRepository, 'Select a Task to be deleted'.yellow);
                console.clear();
                if (titleDelete) {
                    taskRepository.deleteTask(titleDelete); 
                    console.log('Your task has been deleted.'.gray);                    
                }        
                break;
            case 4:
                console.clear();           
                const titleComplete = await tasksList(taskRepository, 'Select a Task to be completed'.yellow);
                console.clear();
                if (titleComplete) {
                    taskRepository.completeTask(titleComplete); 
                    console.log('Your task status has been changed to completed.'.gray); 
                }                
                break;      
            case 5:
                salir = true;
                console.clear();
                console.log('Aplication closed...'.gray);
                break;
        }
    }
}

main();

const tasksList = async(repository, message) => {
    const allTasks = repository.getAllTasks();
    let taskChoices = [];
    for (let i = 0; i < allTasks.length; i++) {
        taskChoices.push({value: allTasks[i].title, name: allTasks[i].title});        
    }
    taskChoices.push({value: false, name: 'Go back...'.green})
    const list = [
        {
            type: 'list',
            name: 'option',
            message: message,
            choices: taskChoices
        }
    ];

    const {option} = await inquirer.prompt(list);

    return option;
}
