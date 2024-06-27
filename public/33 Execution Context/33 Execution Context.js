var admaProjectZero = `fullCounter`;


let x = 23;

let y = 34;


function getResult (n1, n2) {

let sum = n1 + n2;
    return sum;
}


let result = getResult(x, y);

let result2 = getResult(10,49);




// Creation Phase

// 1. x variable is allocated memmory and stores undefined
// 2 same for y variable
// 3. getResult is a function and an allocated memory and stores all the code, all the code withins the function is stored to memory

// result is allocated to memory and set to undefined
// same for result2 variable


// Execution Phase

// 1. places the value of 23 into the variable x
// 2. place the value of 34 into the variable y
// skips the function execution cos there is nothing to execute

// it invokes the getResult() function and creates a new function execution context


//Function execution context creation phase

// 1. n1 and n2 are allocated to memory and stored as undefined variables
// sum variable is allocated to memory and stored as undefined


//Function execution context exection phase

// n1 and n2 are assigned the values of 10 and 49 because it is executed line by line

// calc is done and is 57 is put in the sum variable

// returns tells the function execution context to return to the global execution context with the value sum of (57)

// returned sum value is placed in result variable

// opens all the same parameters fr the secod functioin

console.log(result)

console.log(result2)