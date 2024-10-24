const strLit = 'Hello David';
const strObj = new String();


console.log(strLit, typeof strLit);
console.log(strObj, typeof strObj);

// boxnig --  object is turned back into a literal the reverse is called unboxing

console.log(strLit.toUpperCase())
console.log(strLit[0])


// unboxnig -- literal is turned back into a object / string
console.log(strLit.valueOf())
console.log(strObj.valueOf(), typeof strObj)

console.log(strLit.constructor)
console.log(strObj.constructor)

console.log(strLit instanceof Object)
console.log(strObj instanceof String, strObj instanceof Object)


// The instanceof operator returns true if an object is an instance of a constructor. It returns false if it is a literal.
console.log(strLit instanceof String);
console.log(strObj instanceof String);

// Other types
const numLit = 20;
const numObj = new Number(20);

console.log(numLit, typeof numLit);
console.log(numObj, typeof numObj);

const boolLit = true;
const boolObj = new Boolean(true);

console.log(boolLit, typeof boolLit);
console.log(boolObj, typeof boolObj);

const arrLit = [1, 2, 3, 4, 5];
const arrObj = new Array(1, 2, 3, 4, 5);

console.log(arrLit, typeof arrLit);
console.log(arrObj, typeof arrObj);


const funcLit = (x) => {

    return x * x;
}

console.log(funcLit(3), typeof funcLit);


const funcObj = new Function('x', ' return x**x;');

console.log(funcObj(3), typeof funcObj);


const obj1 = {};
const obj2 = new Object(); // Behind the scenes, JS does this for the previous line as well

console.log(obj1, typeof obj1);
console.log(obj2, typeof obj2);