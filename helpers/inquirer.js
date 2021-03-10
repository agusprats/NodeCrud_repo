const inquirer = require('inquirer');
const colors = require('colors');
const Choices = require('inquirer/lib/objects/choices');

const inquirerMenu = async() => {
    
    console.log('┌────────────────────────────────────────────┐'.blue);
    console.log(`${'│              '.blue}${'ToDo App MENU'.green}${'                 │'.blue}`);
    console.log('└────────────────────────────────────────────┘'.blue);

    const menu = [
        {
            type: 'list',
            name: 'option',
            message: 'Select an option'.yellow,
            choices: [
                {
                    value: 1,
                    name: `${'1-'.blue} Create Task`
                },
                {
                    value: 2,
                    name: `${'2-'.blue} Get all Tasks`
                },
                {
                    value: 3,
                    name: `${'3-'.blue} Delete Task`
                },
                {
                    value: 4,
                    name: `${'4-'.blue} Complete Task`
                },
                {
                    value: 5,
                    name: `${'5-'.blue} Exit`
                },
            ]
        }
    ];

    const {option} = await inquirer.prompt(menu);

    return option;
}

const inquirerInput = async(message) => {
    const question = [
        {
            type: 'input',
            name: 'description',
            message
        }
    ];

    const {description} = await inquirer.prompt(question);
    return description;
}

module.exports = {
    inquirerMenu,
    inquirerInput
}