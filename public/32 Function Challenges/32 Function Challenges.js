// Challenge 1 : convert the temperature from fahrenheit to celsius

function getCelsius(fahrenheit) {


    return (fahrenheit - 32) * 5 / 9;




};


let tempFahr = 100;

let tempCelcius = getCelsius(tempFahr)

console.log(tempFahr + '°F is ' + tempCelcius.toFixed(2) + '°C');




// lets try it as an arrow function

//  cprrection
const fToC = f => (f - 32) * 5 / 9;

// Example usage:
let tempInFahrenheit = 100; // Example temperature in Fahrenheit
let tempInCelsius = fToC(tempInFahrenheit);

console.log(`${tempInFahrenheit}°F is ${tempInCelsius.toFixed(2)} \xB0C`);



// Function Challeng2 : Min Max


//  Practice this again and try again


function minMax(arr) {

 const min = Math.min(...arr);


 const max = Math.max(...arr);


 console.log(min);

 console.log(max);


return{



    min: min,
    max: max,
    range: max - min
}


}




console.log(minMax([1,2,3,4,5]) );


// Use Immediately Invoked function expressions to get the area of the rectangle. Both Lenght and Width


// (function areaRectangle(width, lenght) {


//     const area = width * lenght;
//     const result = `The area of the rectangle also known as the product ${width} and ${lenght} is equal to ${area}`;
//     // console.log(result);
// });

// console.log(result);


// (5,10);


// Original code with errors highlighted
((width, lenght) => {
    
    
    const area = width * lenght; // 'lenght' should be 'length'
    
    const answer = `The area of the rectangle also known as the product ${width} and ${lenght} is equal to ${area}.`;
    
    console.log(answer);
    
})(5,10); // This is not properly invoking the function

// Separated function invocation
