//Fetching a JSON File
fetch('./movies.json')
.then(res => res.json()) //return is not added because the data being called is not within a function callbracket
.then((movie)=>console.log(movie))


// Fetching a Text File
fetch('./test.txt')
.then(res => res.text())
.then((text)=>console.log(text))


//Fetching from an api endpoint
fetch('https://api.github.com/users/8mileverse')
.then(res => res.json()) 
.then((data)=> (document.querySelector('h1').textContent = data.login))
.then((user)=>console.log(user));

