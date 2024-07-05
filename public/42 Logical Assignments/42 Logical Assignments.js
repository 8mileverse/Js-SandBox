
// OR value assings the Right side value only if the left is a falsy value

let a = false;


if (!a) {
    console.log('Condition is false');
};

// Long Method above

// Short Method Below

a = a||20; //prefered method

// shortest method posible

a||=10;

console.log(a);



// The AND Operator asssigns the right value only if the left side is a truthy value

let b = 30;

if (b) {
    console.log('Condition is true');
};

b = b && true;

console.log(b); // b will be 40 as it is a truthy value

// Shorter Method

b &&=true;

console.log(b); // b will be 30 as it is a truthy value

// ??= assigns the right value only if the left side is null or undefined

let c = null;

// c ??= 10;

// console.log(c); // c will be 10 as it is null or undefined


if (c === null || c === undefined){


    c = 20;
}



console.log(c); // c will be 50 as it is null or undefined
// console.log(a); // c will be 50 as it is null or undefined