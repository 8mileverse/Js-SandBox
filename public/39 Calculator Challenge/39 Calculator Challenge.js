// Challenge 1 : Create a function that will pass in 3 values, num 1, num 2 and an operator either +,-,/ and *



function calc(num1, num2, operator){


    // const num1 = 3;

    // const num2 = 5;

  if(operator === '+'){


    console.log('num1 + num2 = '+ (num1 + num2));



  }else if(operator === '-'){


    console.log('num1 - num2 = '+ (num1 - num2));

  }else if(operator === '*'){


    console.log('num1 * num2 = '+ (num1 * num2));

  }else if(operator === '/'){


    console.log('num1 / num2 = '+ (num1 / num2));
  }else{

    console.log('Invalid operator');
  }



// using Switch Statements



switch(operator){

 case '+':

 console.log('num1 + num2 = '+ (num1 + num2));
 break;


 
 case '-':
    console.log('num1 - num2 = '+ (num1 - num2));
 break;



 case '*':
    console.log('num1 * num2 = '+ (num1 * num2));
 break;


 case '/':
    console.log('num1 / num2 = '+ (num1 / num2));
 break;

 default:
    console.log('Invalid operator');
 

}

}

result = calc(10203,23,'-');

