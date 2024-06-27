// Creating Arrays

// Arrays are special type of object in JavaScript and it's stores multiple values. 

// Arrays Literals


const arr = [1,3,4,5,6,7,8,9,10,11]

console.log(arr);


// Array Constructor
let x;

const techCompany = new Array('Google Inc','Microsoft','Amazon','Tesla Inc','Apple Inc');

// to specify an index in an array
 

x = techCompany[1];


x = `My fav Tech Company at the moment is ${techCompany[0]}`;

// x = ` my fav Tech Company at the moment is ${x}`; --- this kind will call the last declared version of the variable

x = techCompany[0].length;

techCompany.splice(0 , 2, 'Android', 'Linux');

techCompany.length = 5;

// techCompany[0] = 'Ubuntu';

techCompany[techCompany.length ] = 'Tizen';
techCompany[techCompany.length ] = 'ython';

x = techCompany;

console.table(x);

