// solution one

// function reverseString(str) {
//  return str.split("").reverse().join("");
// }

// Using a for loop

// function reverseString(str){
// let reversed = '';

// for(let char of str ){

//     reversed = char + reversed;

// }
// return reversed;
// }


// Using reduce

function reverseString(str) {
  return str.split('').reduceRight((acc, char) => acc + char, '');
}

// Using Array.prototype.map()

module.exports = reverseString;
