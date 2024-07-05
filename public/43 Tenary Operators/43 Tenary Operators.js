 const age = 8;
 console.log(`You are ${age} years old`);

 if (age>=18 ){

    console.log(`You are elegible to vote because you are ${age} years old and therefore above 18 years`);
 }else{

    console.log(`You are not elegible to vote because you are ${age} years old and therefore below 18 years`);
 }

 


//  using tennary operations

age<= 18 ? console.log (`You are ${age} years old , you are expected to be in school`):age>=18 && age<= 26 ? console.log(`By this ${age} you are expected to have finished schooling in Nigeria`) : age>= 26 ? console.log(`You are ${age} years old what are u still doing in school, you will need to work more `) :console.log(`You are ${age} years old.`);



const canVote = age>=18 ? true : false;

const canVote2 = age>=18 ? 'You can vote' : 'You cannot Vote';

console.log(canVote);

console.log(canVote2);


// Multiple Statements

const auth = false;  // Represents if the user is authenticated or not

// let redirect;
// if (auth) {

//     alert('Welcome to the Internet Dashboard');
//     redirect = '/dashboard';

// }else{
//     alert('Please Login First');  // or Access Denied
//     redirect = '/login';
// }


// Using Tenary  part 1

// redirect = auth ? '/dashboard' : '/login';  // Redirects to dashboard if authenticated otherwise to login page.
//  // or

// redirect = auth && '/dashboard' || '/login';  // Redirects to dashboard if authenticated otherwise to login page.
//  // or



// Another Method patt 2

const redirect = auth ? (alert('Welcome to the Dashboard'), '/dashboard') : (alert('Access Denied'), '/login');
console.log(redirect);




// Here’s how you can achieve the desired output using different approaches: from If else, switch, arrow functions, tenary operations and functions

// ### 1. If-Else Statements

// ```javascript
// const auth = false;  // Represents if the user is authenticated or not

// let redirect;

// if (auth) {
//     alert('Welcome to the Internet Dashboard');
//     redirect = '/dashboard';
// } else {
//     alert('Please Login First');  // or Access Denied
//     redirect = '/login';
// }

// console.log(redirect); // For checking the redirect value
// ```

// ### 2. Switch Statements

// ```javascript
// const auth = false;  // Represents if the user is authenticated or not

// let redirect;

// switch (auth) {
//     case true:
//         alert('Welcome to the Internet Dashboard');
//         redirect = '/dashboard';
//         break;
//     case false:
//         alert('Please Login First');  // or Access Denied
//         redirect = '/login';
//         break;
//     default:
//         redirect = '/';
// }

// console.log(redirect); // For checking the redirect value
// ```

// ### 3. Arrow Functions

// ```javascript
// const auth = false;  // Represents if the user is authenticated or not

// const handleAuthentication = (auth) => {
//     let redirect;
//     if (auth) {
//         alert('Welcome to the Internet Dashboard');
//         redirect = '/dashboard';
//     } else {
//         alert('Please Login First');  // or Access Denied
//         redirect = '/login';
//     }
//     return redirect;
// };

// const redirect = handleAuthentication(auth);
// console.log(redirect); // For checking the redirect value
// ```

// ### 4. Ternary Operator

// ```javascript
// const auth = false;  // Represents if the user is authenticated or not

// const redirect = auth ? (alert('Welcome to the Internet Dashboard'), '/dashboard') : (alert('Please Login First'), '/login');

// console.log(redirect); // For checking the redirect value
// ```

// ### 5. Functions

// ```javascript
// const auth = false;  // Represents if the user is authenticated or not

// function handleAuthentication(auth) {
//     let redirect;
//     if (auth) {
//         alert('Welcome to the Internet Dashboard');
//         redirect = '/dashboard';
//     } else {
//         alert('Please Login First');  // or Access Denied
//         redirect = '/login';
//     }
//     return redirect;
// }

// const redirect = handleAuthentication(auth);
// console.log(redirect); // For checking the redirect value
// ```

// All these approaches will achieve the same result but are structured differently to demonstrate various ways of handling conditional logic in JavaScript.