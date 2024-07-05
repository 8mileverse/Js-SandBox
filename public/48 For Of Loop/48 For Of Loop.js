const grades = ['A', 'B', 'C', 'D', 'E', 'F  '];

// for (let i = 0; i < grade.length; i++) {



//     console.table(grade[i]);


// }

// loop over arrays 


for (const grade of grades) {


    console.log(grade);
}


const users = [

    {

        name: 'David',
        age: 20,
        grade: 'A'

    },
    {
        name: 'Mark',
        age: 25,
        grade: 'B'
    },
    {
        name: 'John',
        age: 30,
        grade: 'C'
    }
];


for ( const user of users ) {


    console.table(user);
}

// Loop over Str

const str = 'Get Over Here';

for ( const char of str) {

    console.log(char);
}

// loop over maps 


const map = new Map();

map.set('name', 'David');
map.set('age', '29');
map.set('grade', 'A');

for (const [key, value] of map) { // make sure that  when u are trying to call a map on the for..of loop, make use the key and value are both in arrays

    console.log(`${key}: ${value}`);
}