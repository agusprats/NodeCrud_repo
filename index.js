const {inquirerMenu, inquirerInput} = require('./helpers/inquirer')


const main = async() => {
    const option = await inquirerMenu();
    switch (option) {
        case 1:
            // Ingresar titulo
            
            break;
        case 2:
        //Mostrar lista
       
            break;
    }
}
main();