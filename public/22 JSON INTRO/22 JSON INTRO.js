// Javascript object to JSON representation

let x;

const postData = {

    id:1,
    title: 'My First Post Ever',
    taskCompleted: false
};


// To convert object literal to json 

const jsonData = JSON.stringify(postData);


// To convert Json object to Object representation


const objectData = JSON.parse(jsonData);



console.log(postData);

console.table(jsonData);


console.log(objectData);