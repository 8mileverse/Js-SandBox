// Create a Varible Called X that is a random number between 1 and 100 across along a variable called why that's the random number between 1 and 50 create a variable for the sum difference products and quotients, remainder of X&Y. Lock the output in a string that shows the two numbers of X&Y along with the operator and results 


// X random number between 1 and 100

let x = Math.floor(Math.random() *100 + 1);


// Y random mumber between 1 and 50

let y = Math.floor(Math.random() * 50 + 1);

let sumOfOutput = x + y;
let differenceOfOutput = x - y;
let prodOfOutput = x * y;
let quotientOfOutput = x / y;
let rmdOfOutput = x % y;


console.log(`${x} + ${y} = ${sumOfOutput}`);

console.log(`${x} - ${y} = ${differenceOfOutput}`);

console.log(`${x} * ${y} = ${prodOfOutput}`);

console.log(`${x} / ${y} = ${Math.floor(quotientOfOutput)}`);

console.log(`${x} % ${y} = ${rmdOfOutput}`);

console.log(sumOfOutput);                                 