const d = new Date(2022, 3, 20, 8, 30, 45   );

const month = d.getMonth();

console.log(month);



// Date formats output


// const todaysDate = new Date(2050, 4, 20, 8, 30, 45 );

// const optionsDate = {

//      weekday: 'long',
//     year: 'numeric',
//      month: 'long',
//      day: 'numeric',
//      hour: 'numeric',
//      minute: 'numeric',
//      second: 'numeric'


// } 


// console.log(todaysDate.toLocaleString('en-US', optionsDate,'\u2122')); //'\u2122' is for trademark format


switch (month) {

   case 1: console.log('It is January ');

   break;


   case 2: console.log('It is February ');

   break;


   case 3: console.log('It is March ');

   break;

   
default: console.log('It is neither Jan, Feb or March ');


}


const hour =23;


const info = {
    name: 'David',
    age: 28,
    occupation: 'Web Developer',
    hobbies: ['coding','playing games','watching movies'],
    dob: `2002, 20, May`,
}


// if (hour <= 12){

//     console.log(`Good Morning, ${info.name}`);
// }else if (hour >= 12 && hour <= 18){

//     console.log(`Good Afternoon, ${info.name}`);
// }else{

//     console.log(`Good Evening, ${info.name}`);
// }


switch (true) {

case hour < 12:

console.log(`Good Morning ${info.name}`);

break;

case hour >= 12 && hour <= 18:

console.log(`Good Afternoon, ${info.name}`);

break;


case hour >= 18:

console.log(`Good Evening, ${info.name}`);

break;

default:
     console.log(`Good Day, ${info.name}`);
     
}
