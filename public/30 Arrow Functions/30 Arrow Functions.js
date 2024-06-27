// // function sub(a,b,c){


// //     return a-b===c;


// }


// console.log(sub(10,20,30));  // output is false



// Lets rewrite the top as an arrow Function


// Regular Arrow Function Syntax
const sub = (a, b, c) => {

    return a - b === c;
}


console.log(sub(10,20,-10));



// We can even make it shorter still

// This is known as Implicit Return

const add = (a, b, c) => a + b + c;

console.log(add(10, 20, 30));



// On a single parameter

const exp = (a) => a**2 === 100;  // can leave the parenthesis for a single parameter

console.log(exp(10));




// Returning an Object

const obj = () => ({
    
    
    name: 'Ayomide',
    age: 23,
    gender: 'Male',
    address:{

        street: '123 Main St',
        city: 'New York',
        state: 'NY',
        zip: 10001
    }




});

console.table(obj());


// High order Array Functions

const  num = [1,2,3,4,5,6,6];

num.forEach(function(number) {

    console.log(number);



});


// shorter function

// Arrow function in a call back
num.forEach(  (number) => console.table(number));