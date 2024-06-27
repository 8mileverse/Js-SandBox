// Naminng

const firstName = 'Jack';
const lastName = 'John';
const age = 34;


// Now Because they are the same thing we do not need to do thia again, becaus the key and value pair are the same 


// const person= {
//     firstName: firstName,
//     lastName: lastName,
//     age: age
// }


// rather we do this and it is much better

const person= {
    firstName,
    lastName,
    age
}

console.log(person);



// Destructuring


const todo ={
    id: 1,
    task: 'Take out trash',
    completed: true,
    degree: {
        Difficulty: 'high'},
}


todo.rank = {level: 'high'}


console.log(todo);
// we could do this

// const id = todo.id;

// but we could also do this in destructuring 

const {id, task, degree: {Difficulty}, rank:{level}} = todo;

const{
    id: idHasBeenRenamed,
    task: taskHasBeenRenamed,
    completed,
    degree: {Difficulty:Challenge},
} = todo

console.table(todo);

console.log(task);
console.log(taskHasBeenRenamed);
console.log(Challenge);


// Destructuring Arrays

const arr = [1,324,4,5,62,63,64 ,65,66,67,68,7387,53,565,5563];    


const [...rest] = arr

console.table(arr);
console.table(rest);