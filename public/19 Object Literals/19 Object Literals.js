
// const newBabe = {
//     Ore: {
//         name: 'Ore',
//         age: 21,
//         gender: 'female',
//         occupation: 'web developer',
//         hobbies: ['coding', 'playing games', 'watching movies'],
//         address: {
//             street: '123 Main St',
//             city: 'New York',
//             state: 'NY',
//             zip: 10001
//         }
//     },

//     beebah:{
//         name: 'Beebah',
//         age: 23,
//         gender: 'female',
//         occupation: 'web developer',
//         hobbies: ['coding', 'playing games', 'watching movies'],
//         address: {
//             street: '123 Main St',
//             city: 'New York',
//             state: 'NY',
//             zip: 10001
//         },
//     },

//     jamiat: {
//         name: 'Jamiat',
//         age: 22,
//         gender: 'female',
//         occupation: 'web developer',
//         hobbies: ['coding', 'playing games', 'watching movies'],
//         address: {
//             street: '123 Main St',
//             city: 'New York',
//             state: 'NY',
//             zip: 10001
//         }
//     },

//     lilBestieTrblemakr:{
//         name: 'lilBestieTrblemakr',
//         age: 22,
//         gender: 'female',
//         occupation: 'web developer',
//         hobbies: ['coding', 'playing games', 'watching movies'],
//         address: {
//             street: '123 Main St',
//             city: 'New York',
//             state: 'NY',
//             zip: 10001
//         }
//     }
    
// };


// console.table(newBabe, newBabe.Ore.address)

let x;

const newDev = {
 David: {
    name: 'David',
    age:22,
    gender: 'male',
    occupation: 'web developer',
    hobbies:['coding','playing games','watching movies'],
    dob: `2002, 20, May`
 }
}

x = newDev.David.name;
x = newDev.David['age'];
x = newDev['David']['dob']
x= newDev.David['hobbies'][1];

newDev.David['hobbies'][1] = 'riding bikes';

x= newDev.David['hobbies'][1];

x = newDev;

x = Array.isArray(newDev.David.hobbies);
// Lers try deleting a single hobby from the stack

delete newDev.David.hobbies[1];

x = newDev.David.hobbies;

newDev.David.hobbies[1] ='Gaming';

x = newDev.David.hobbies;

newDev.David.Location =[ 'Lagos State University', 'Location'];



x = newDev.David;

// Practicing a bit of Function

newDev.David.superPower = function() {

   console.log(`Hi there, my name is ${this.name} and I possess all the fictional powers of the man of steel, naruto and Jujustu Kaisen`)
}

newDev.David.superPower();
x = newDev.David;
console.table(x)

let u;

const eyeTech =  {

   'first name': 'John', 
   'last name': 'Doe',
   

}

u = eyeTech['first name'];





console.log(u)