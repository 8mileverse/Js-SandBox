 function sayHi() {
    console.log('Hi there');
 }

 sayHi();


 function sum(num, num){

    console.log(num+ num);
 }


 sum(23,45);

 function sub(num1, num2){

    return num1-num2;

     // console.log(num - num); //Wont display on the console because its after the return
 }


 const result = sub(23,45);

 console.log(result, sub(23,89), sub(23,43)); //


 const arr = [3,3,4,5,6,7,7,8,9,9,9,9,7,4,4,3,3,435,34,4];


  const [...rest]= arr;

  x = arr.flat(rest);

 console.log(rest); //

 console.log(x); //