const numbers = [1,2,3,4,5,6,7,8,9,10];

const result = numbers.reduce((accumulator, index) =>accumulator + index , 0) // thsi method works because its a single arugument being passd

console.log(result);


// accumulator = " is always set to zero 0"
// index = " is always set to to the elements or values of the array 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25

// so it run like this 0 + 1 =1, then the next accumulator becomes 1, and it goes again by iteration 1 +2 = 3 , 3+3 = 6, 6+ 4 = 10 till the end of the array is complete


// const fruits = ['apple', 'banana', 'orange', 'apple', 'orange', 'banana', 'banana'];
// const count = fruits.reduce((acc, fruit) => {
//   acc[fruit] = (acc[fruit] || 0) + 1;
//   return acc;
// }, {});


// console.log(count);


const cart = [{


    id: 1,
    name: 'apple',
    price: 200,
    quantity: 2
},{

    id: 2,
    name: 'banana',
    price: 150,
    quantity: 3
},

{

    id: 3,
    name: 'orange',
    price: 250,
    quantity: 1
},
{
    id: 4,
    name: 'apple',
    price: 200,
    quantity: 5
}];



const totalPrice = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);

console.log(totalPrice);