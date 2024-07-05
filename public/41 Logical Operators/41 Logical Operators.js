// AND Operatoer &&

console.log(30 > 23 && 30 < 23); // false
// The above example is false because all the parameters passed are supposed to be equal to true

console.log(30 > 23 && 10 < 23);  // result will output true.


// OR Operator ||

console.log(30 > 23 || 30 < 23); // true

// either value will result in true if one is correct

// && will the return the first falsy value or the last value


let a;


a = 10 && 230;

a = 10 && 0 && 230;

a = 10 && 0 && 230 ;

console.log(a); // 0



//  || will return the first value truthy or the last value

let b;

b = 230 && 0 && 230;


console.log(b);




