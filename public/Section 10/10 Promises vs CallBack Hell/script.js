// Undercallback Hell


function getData(endpoint){ // return a promise in place of callbacks so cb is gone

return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', endpoint);

    xhr.onreadystatechange = function(){

        if(this.readyState === 4){

            if(this.status === 200){
                resolve(JSON.parse(this.responseText));
                

            }
            else{
                reject(new Error('Something went wrong'));
            } 
        }
    }
    
    //using a set timeout

    setTimeout(() => {

        xhr.send();

    }, Math.floor(Math.random() * 3000) + 1000 );
})
};

getData('./movies.json').then((movie) => {
    console.log('Movies:', movie);
    return getData('./actors.json');
})
.then((actor) => {
    console.log(actor);
    return getData('./directors.json');
})
.then((director) => {

    console.log(director);
    //... more then 500 lines of code here...
 })
 .catch((error) => {

    console.error('Error:', error);
})




