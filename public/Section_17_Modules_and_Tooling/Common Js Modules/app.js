const message =  require('./utils')

console.log(message)


const capitalizeWord = require('./utils.js')
console.log(capitalizeWord('hello world'))



const Person = require('./app')
const person_1 = new Person('Homer', 34);


person_1.greet()