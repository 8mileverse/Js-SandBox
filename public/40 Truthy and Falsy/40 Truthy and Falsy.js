// const email = 'test@example.com';


// if(email){

//     console.log('You passed in an email address');
// }

// console.log(Boolean(email));



// There are 6 falsy values

// false, 0, '', null, undefined, NaN


const x = 'false';

console.log(x);

console.log(Boolean(x));


if (x) {

    console.log('This is a truthy value');
}else{

    console.log('This is falsly value!');
}


// Truthy values

// true, 1, 'hello', [1,2,3], {name: 'John'}, new Date(), [] empty array, {} empty object, function () {} empty function, and anything in a string, ' ' when a string has space it is considered to be true


// Truthy and Falsy Caveats

const children = 0;

if (children !== null){

    console.log(`I can't believe Jame has a total number of ${children} children from his ex wives`);
}else{

    console.log('How many children does Jame have ??');
}


// Checking for empty arrays and objects

const posts = [];


if(posts.length>0 && isNaN(posts)){

    console.table(`${posts}`);
}else{

    console.log('No Post Exists');
}

console.log(posts.length);


// Checking for empty arrays and objects

const user = {
     name: 'John', 
     age: 30,
     hobbies: ['music', 'codings', 'relaxing'],
     address: {
         street: '123 Main St',
         city: 'New York',
         state: 'NY'
     }
    
    };


   // note: in place of arr.length, make use of Object.keys instead 

//    going further object.keys(user).length

if(user.name && user.age !== null){

    console.log(`Hello, My name is ${user.name} and I am ${user.age} years old`);

    console.table(user);
}else{

    console.log('User Information is not provided');
}