// Challenge 1 Add a new value and Reverse an Array

let x ;

const arr = [1, 2, 3, 4,5];

arr.reverse();
arr.push(0);


arr.unshift(6);



// console.log(arr);
console.log(arr);



// Combine and Concat Arr 1 and 2 into a single array

let w;

const arr1 = [1, 2, 3, 4, 5];

w = arr1.splice(4)


const arr2 = [5,6, 7, 8, 9,10];
// or index 0 is spliced away from arr 2
const arr3 = arr1.concat(arr2);


console.log(arr1);
console.log(arr2);

console.log(arr3);

console.log(w);