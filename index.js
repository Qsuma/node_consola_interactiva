import colors from 'colors';
import { inquirerMenu } from './helper/inquirer.js';

console.clear();

const main = async () => {
  let opcion ='';

  while (opcion !== 0) {
    opcion = await inquirerMenu();
   console.log(opcion);
 
  }
};

main();
