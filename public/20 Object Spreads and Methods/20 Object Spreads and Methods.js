// Check to see if a string is palindrome

// function isPalindrome(str){

//     const normalizedStr = str.replace(/[a-zA-Z0-9]\s+/g, ' ').toLowerCase();
   
//     const reversedStr = normalizedStr.split('').reverse().join(' ');

//     return normalizedStr === reversedStr;
// };


// Lets try creating an Todo Object : Method 1


let x;

const Todo = {};

Todo.id = 1;

Todo.task = 'Clean House';

Todo.completed = false;

x = Todo;

console.table(x);




// Method 2 

/*
let x;

const Todo = new Object();        this is a declaration of object

Todo.id = 1;

x = Todo;

console.table(x);

*/

let u;

const geoLocale = {
    address:{
        street: '123 Main St',
        city: 'New York',
        state: 'NY',
        zip: '10001',
        geoPosition:{
            lat: 40.7128,
            lng: -74.0059,
        }
    }
}



// Using Object Spread Operators


const obj1 ={
    a: 1,
    b: 2,
}

const obj2 = {
    c: 3,
    d: 4,
}


const obj4 ={key:obj1, obj2:obj2}

const obj3 ={...obj1,...obj2}

const obj5 ={ ...obj1, obj2}


// USING OBJECT METHODS

const obj6 = Object.assign({obj1});
const obj7 = Object.assign({},obj1, obj2);





// Using Object Destructuring

u = geoLocale.address.geoPosition.lat;

console.log(u);

console.table(obj3);

console.table(obj4);

console.table(obj5);

console.table(obj6);

console.table(obj7);



// Task on On=bjects and Arrays 

let p;

const task = [
    {
        id: 1,
        task: 'Clean House',
        completed: false,
    },
    {
        id: 2,
        task: 'Wash Car',
        completed: false,
    },
    {
        id: 3,
        task: 'Do Laundry',
        completed: false,
    },
]
p = task;
z = Object.keys(task);

w =Object.values(task);

e =Object.entries(task);

r = task[0].hasOwnProperty('id'); 

console.table(p);
console.log(z);
console.log(w);
console.table(e);

console.log(r);

