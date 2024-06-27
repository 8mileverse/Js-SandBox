
// Challenge 1 : Turn the first charater of a sting to capital letter

let string = `hello world`;


let myNewString;

let myNewStr;

let myNewStrings;

// solution 1

myNewString = string.charAt(0).toUpperCase() + string.substring(1);

console.log(myNewString);

// solution: 2

myNewStrings = string[0].toUpperCase() + string.substring(1);

console.log(myNewStrings);

// Solution 3 making use of template literals

myNewStr = `${string[0].toUpperCase()}${string.substring(1)}`;

console.log(myNewStr);