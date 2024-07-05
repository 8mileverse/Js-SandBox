// // Break


// for (let i = 0; i <= 20; i++) {


//     if(i === 18){


//         console.log("breaking...");
//         break; // this will break the loop once i reaches 18
//     }
//     console.log( `${i}`);  // this will break the loop once i reaches 'Lets Get It on'
// }



// Continue

for (let i = 0; i <= 20; i++) {

    if (i === 13){

        console.log("Skipping floor 13...");
        continue; // this will skip the current iteration of the loop and move to the next one
    }


    console.log(i);

    if(i === 20){

        console.log('Floor 13 does not exist, we have reache d the end of our ride');
    }

    
    
}