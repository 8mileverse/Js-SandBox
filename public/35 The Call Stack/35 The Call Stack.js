// A Stack is a data structure in many programming languages that operates in very specific ways. LIFO and FIFO 

// function first()    {


// console.log(...first);

// }

// function second() {

// console.log(...second);


// }


// function third() {



//     console.log(...third);


// }



// first();

// second();

// third();


// They are all being run by the Global Execution Context


function first()    {


    console.log('...first');
    

    second();
    }
    
    function second() {
    
    console.log('...second');
    
    third();
    }
    
    
    function third() {
    
    
    
        console.log('...third');
    
    
    }
    
    
    
    first();

    
    
    
    // OK So what happens here is that in this case the first is called and set at the bottom and begins running so it is placed on top of the stack on top of global contexts functions then the second ending is placed in the first task that moves the 2nd to the 1st stack and keeps it running that places the 2nd on the 1st tackle they still running and likewise for 3rd so this is called lifo.
    
