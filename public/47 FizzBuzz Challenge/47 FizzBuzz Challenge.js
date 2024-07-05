for(let i =0; i<= 100; i++) {

if (i % 3 === 0 && i % 5 === 0) {


    console.log(`Number ${i} is a multiple of both 3 and 5 so we call FizzBuzz`);
}else if (i % 3 === 0){

    console.log(`Number ${i} is a multiple of 3 only so we call Fizz`);
}else if (i % 5 === 0){

    console.log(`Number ${i} is a multiple of 5 only so we call Buzz`)
}
else{
    console.log(`Number ${i} is a not multiple of either 3 or 5 so we call notFizzBuzz`);
}


}