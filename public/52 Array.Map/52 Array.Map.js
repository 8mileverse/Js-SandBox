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