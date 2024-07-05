// for ([initialExpression]; [conditionExpression]; incrementExpression);statement;


// Initial expression = Initializies a variable/counter
// conditionExpression = this will cause the expression to loop or iterate until its false
//IncrementExpression = epressions of a variable/counter that will be executed after each iteration of the loop
// statement = code that will be executed each time the loop is run

// To execute a `block` of code use the `{}` syntax



// for(let i = 3; i <= 100;  i = i += 2){


//     console.log('Number ' + i);

//     if(i == 5){

//         console.log('My fav number is '+ i)
//     }else{

//         console.log('why gan')
//     }
// }


// using nested loops

// for(let i=0; i <=10; i++){

//     console.log(`${i}  Times Table`);

//     for(let j=0; j<=100; j++){

        
//             console.table(` The product of ${i} and ${j}  = ${i*j}`);
//             // console.table(` ${i}, ${j}`);

//     }


// }


// Using for loop to loop through an array

const name = ['John', 'mark', `james`, 'fred'];

for(let i = 0; i < name.length; i++){


    console.log(`Hi There, ${name[0]} my name is Dvid and i will be guiding you through the rivers of javascript today`);
}