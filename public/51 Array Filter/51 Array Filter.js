const words = ['global','local','farm','farmer' , 'school'] ;


const result = words.filter( words =>words.length > 4);


console.log(result);



const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17];


const response = numbers.filter(function(even){

    return even % 2 === 0;
 });




console.log(response);

// for prime numbers

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];

// const isPrime = (num) => {
//     if (num <= 1) return false;
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//         if (num % i === 0) return false;
//     }
//     return true;
// };

// const primeNumbers = numbers.filter(isPrime);

// console.log(primeNumbers); // Output: [2, 3, 5, 7, 11, 13, 17]




// Arrays of Objects


const techIT = [

 {
    name: 'Google',
    CEO: 'Larry Page',
    Founded: 1998,
    end : 2002
},
 {
    name: 'Facebook',
    CEO: 'Mark Zuckerberg',
    Founded: 2004,
    end: 2045
},
 {
    name: 'Apple',
    CEO: 'Steve Jobs',
    Founded: 1976,
    end: 2032
},
 {
    name: 'Netflix',
    CEO: 'Chris Hemsworth',
    Founded: 1997,
    end: 2076
},
 {
    name: 'Google',
    CEO: 'Jeff Bezos',
    Founded: 1994,
    end: 2003
}

];


// Trying to get a  specific value in  the list of nested objects in arrays


const brand = techIT.filter((brand)=> brand.name === 'Google');

console.table(brand); // Output: [{name: 'Google', CEO: 'Larry Page', Founded: 1998}]



// companies that satarted after a year ad ended on a specific year


const year = techIT.filter((date) => date.Founded >= 1990 && date.end <= 2070 );

console.table(year)

// To specify thoses companies that have lasted 10 yrs or more


const tenYears = techIT.filter((date) => date.end - date.Founded >= 10 );
console.table(tenYears);
