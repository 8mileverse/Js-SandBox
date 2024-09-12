const promise = new Promise(( resolve, reject) => {

    setTimeout(() => {

        
        console.log(`async request completed`);
        resolve();


    }, 1000);

});
promise.then(() =>{  // then this will take in a callback function and the () will be anything passed into the resolve

    console.log(`promise consumed...`);
   
   
   }); //Promise Handling



const getUser = new Promise((resolve, reject) => {

    setTimeout(() => {

        let error = true;    //Flagging an error

        if(!error){

            resolve({
    
            name: 'John',
            age: 30,
            rank: 'Lengendary S-Class',
            isekai: 'Bald Returner Returns Home'
    
    
            }); // t0 return the promise passed
 
        }else{

            reject('Something went wrong')
        }


    }, 1000);

});


getUser
.then((user) => console.log(user))
.catch((error) => console.log(error)) // user is representing the resolved promise  and to catch errors
.finally((() =>{

    console.log('This promise has been resolved or rejected'); // This will always run no matter what the outcome is

}))






console.log(`Hello From Global Scope`); //