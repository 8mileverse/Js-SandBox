//Default Parameters

function regUser(user = 'Bot') {    //user is already set to Ay as defult if nothing is passed , also above is the parameters set


    // if(!user){

    //     user = 'Nino';
    
    //     } this was the previous way 

    return user + ' is regestered successfully 😊😊😊.';

}

regUser(); // reperesent the arguements to be passed

// user = 'vivo';

console.log(regUser('timo'));   // if nothing is passed here, user default is Ay.


// Rest Parameters

function sum(...nums) {  // note: .... is also a rep fr arrays

//    return nums;


let totalnum = 0;

for(const num of nums) {


    totalnum += num;
}


    return totalnum;



}


const result= sum(1,2,3,4,5,6,7,8,9,10) ;

console.log(result);


// objects as parameters

function loggedIn(user = {} ) {    //for passing through objects add an empty object container{}


    return `the user ${user[name]} is logged in with the id of ${user.id}.`;
}

loggedIn() ;
const user = {
 
    id: 123456,
    name: 'Femi'
};

console.log(loggedIn(user)); // this is a way 

console.log(loggedIn({
    id: 16,
    name: 'Femi'
})); 
// this is a way we dont have to call the object just the key and value



// Array as parameters

function numRandom(...arr) {    //for passing through arrays add an empty object container[], but the best thing for arrrays is to add ... to it

      const numIndex = Math.floor(Math.random() * arr.length); 
    
      const item = arr[numIndex];


      console.log(item);
}

numRandom(3,5,7,9,11,13,15,17,19,`23`);