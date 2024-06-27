// Library Books Challenge 1


let x;


const libBooks = [

    {
      
        title : 'Things Fall Apart',

        author: 'Chinua Achebe',

        status: {

            own: true,

            reading: true,

            read: false,
        }




    },

    
    {
      
        title : '48 Laws of Power',

        author: 'Robert Greene',

        status: {

            own: true,

            reading: true,

            read: false,
        }




    },

    
    {
      
        title : '   Rich Dad, Poor Dad',

        author: 'Robert Kiyosaki',

        status: {

            own: true,

            reading: true,

            read: false,
        }




    },

]

// Challenge 2 : edit the read value to be true


// const [
//     {
//         status:{read} = true
//     }
// ] = libBooks;


// correction


libBooks[0].status.read = true;
libBooks[1].status.read = true;
libBooks[2].status.read = true;


// Challenge 3 : Destructure the first title and change to Firstname


const 
    {
        title: firstBook
    } = libBooks[0];

// Challenge 4 : Json the Object
 const jsonLib = JSON.stringify(libBooks);


console.log(libBooks)

console.log(firstBook)

console.log(jsonLib)