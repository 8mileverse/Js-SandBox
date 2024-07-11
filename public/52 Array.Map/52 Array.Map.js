 const arr1 = [1,3,4,5,5,6,6,6,7,7,];

 const mapped1 = arr1.map(( x  ) => x * 3);


 console.table(arr1)

 console.table(mapped1); // [1, 3, 4, 5, 5, 6, 6, 6, 7, 7]



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



   const result = techIT.map((names) => names.name);
   console.log(result);


//    Create a new company with name and Ceo


const techStartUp = techIT.map((techInfo) =>{

    return {
        name: techInfo.name,
        CEO:  techInfo.CEO,
        Founded: techInfo.Founded,
        Dissolved: techInfo.end,
        lifeSpan: techInfo.end - techInfo.Founded + ' years' // Now the lifespan of years has been added to the comapny
     }
    // {
    //     name: 'Facebook',
    //     category: 'Social Media'
    // },
    // {
    //     name: 'Apple',
    //     category: 'Tech Company'
    // }

});

console.table(techStartUp);


// Create an Array of kength of years in Comapany Life Span

const lifeSpan = techIT.map((techInfo) => techInfo.end - techInfo.Founded);

console.table(lifeSpan);


// chain Map Method : using two or more Maps at the same time;
numbers = [4,3,5,6,7,8,9,10,11,12];
const sqauareAndDoubled = numbers
.map((number) =>Math.sqrt(number))
.map((number) => number * 2)
.map((number) => number**3)


;

console.table(sqauareAndDoubled);


// Chaining Multiple Methods 

const evenDoubled = numbers
.filter((number) => number % 2 === 0)
.map((number) => number * 2)

console.table(evenDoubled);
