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
    
    const moviesPromise =  getData('./movies.json');
    const actorsPromise =  getData('./actors.json');
    const directorsPromise =  getData('./directors.json');

    const dummyPromise = new Promise((resolve, reject) => {

        resolve('Just Kidding');
    });



//using promise.all() which takes in an array of promises

Promise.all([moviesPromise, actorsPromise,  directorsPromise, dummyPromise]).then((data) => {

    console.log(data)
})
.catch((error) => {

    console.log('Something went wrong, Check the' , error);
});


    // moviesPromise.then((movies) => {

    //     console.log('Movies:', movies); // returns it with the key and the value
    //     return getData('./actors.json');
    // });