// console.log('Hello From Node.JS')

async function getUser(){
    const res = await fetch('https://api.github.com/users/8mileverse')
    const result = await res.json();

    console.log(result);
}

getUser();