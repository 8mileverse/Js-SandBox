// Lets Practice Something

function randomNum () {


    const x = Math.floor(Math.random()* 100+1); //
  
  
    console.log(`x = ${x}`);
  
    if(x >= 10 && x <=20){
  
      console.log('The value of x is greater than 10 and  less than 20');
  
       }
    else if( x >= 20 && x<=30){
      console.log('The value of x is greater than 20 and less than 30');
    }
    else if(x >=30 && x<=40){
      console.log('The value of x is greater than 30 and less than 40');
    }
    else if(x >=40 && x<=50){
      console.log('The value of x is greater than 40 and less than 50');
    
  }else if(x >=50 && x<=60){
      console.log('The value of x is greater than 50 and less than 60');
    
  }else if(x >=60 && x<=70){
      console.log('The value of x is greater than 60 and less than 70');
    
  }else if(x >=70 && x<=80){
      console.log('The value of x is greater than 70 and less than 80');
    
  }else if(x >=80 && x<=90){
      console.log('The value of x is greater than 80 and less than 90');
    
  }else if(x >=90 && x<=100){
      console.log(`The value of x is ${x}`);
    
  }else if(x <= 10){
      console.log(`The value of x is ${x}`);
  }
  else{
      console.log('The value of x is  100');
    }
  
  
  }
  
  randomNum();