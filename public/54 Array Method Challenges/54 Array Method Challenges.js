const people = [{

    first_name: 'John',
    last_name: 'doe',
    age: 25,
    city: 'New York',
    tribe: 'english'
},

{
    first_name: 'Jane',
    last_name: 'Smith',
    age: 30,
    city: 'Los Angeles',
    tribe: 'spanish'
},

{

    first_name: 'Bob',
    last_name: 'Johnson',
    age: 28,
    city: 'Chicago',
    tribe: 'english'
},

{
    first_name: 'Ayou',
    last_name: 'Dorime',
    age: 27,
    city: 'San Francisco',
    tribe: 'Yoruba'
},
{

    first_name: 'Adam',
    last_name: 'Williams',
    age: 35,
    city: 'Boston',
    tribe: 'german'
}

]


// Filter through for those who speak englis and are less than the age of 30


const result = people
.filter((race) => race.age <= 30 && race.tribe === 'spanish' || race.tribe === 'yoruba' || race.age >= 30 && race.tribe !== 'english')
// .map((race) =>
//     ` ${race.first_name} ${race.last_name}, ${race.age}, ${race.city}`)

console.table(result)

// Challenge 2 : Add all the positive numbers in the array


const num = [1, -2, 3, 4, 5, -6, -7, -95, 10, -3, 45, 39]

const posiNum = num.filter((posNum) => posNum > 0);
    
    
 
  sumofPositive = posiNum.reduce((acc, posNum1) => acc + posNum1,0);


  console.log(sumofPositive);


//   Challenge 3: for each word in the array, convert the first letter to capital`


const words = ['hello', 'world', 'javascript', 'is', 'awesome'];


// for (const word of words) {


//     console.log(word.charAt(0).toUpperCase() + word.slice(1));
// }

words.forEach((word) => console.log(word.charAt(0).toUpperCase() + word.slice(1)));