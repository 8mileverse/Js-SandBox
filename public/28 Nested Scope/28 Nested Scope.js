// Nested Function

    function first(){


         const x = 100;


            function second(){

               
                const y = 200;


        console.log(x + y);

}

second();
}

first();



// Nested Blocks


if(true){


    const r = 100;


    if(r===100){

        const s = 200;

        console.log(r + s);
    }

    // console.log(s);
}