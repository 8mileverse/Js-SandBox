// try {
//   console.log(x);
// } catch (error) {
//   console.log(error + " is up"); // log the error to the console
// }

//

function doubleNumber(number) {
  if (isNaN(number) === true) {
    throw new Error(`${number} is not a number `);
  } else {
    return number * 2;
  }
 
}

try{
    const result = doubleNumber();
    console.log(result);
   }
   catch(err){
   
       console.log(err);
   }

