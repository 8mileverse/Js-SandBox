// console.log(1234);

// import capitalizeWord from "./modules/utils.js";

import { messageHandler, capitalizeWord } from "./modules/utils.js";
import User from "./modules/User.js";

console.log(capitalizeWord('hello ganja from kogii'));
console.log(messageHandler.text);



const user = new User("John Doe", 30);
user.greet();