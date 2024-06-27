// window.alert('How far my guy!!!!');

// alert('Please , enter your name and password');



console.log(window.innerHeight, window.innerWidth, typeof window);




const x = 1010;

console.log(x, 'x is in global scope');


function dance (){

console.log(x, 'x is in function scope');

}

dance();


if(x){

    console.log(x, 'y is in block scope');

}


// Functions have their own scopes as well

function add(){

    const y = 505;

    console.log(y,x + y, ' this constant y is function scope');  // this constant was declared in side the function and is not affected by the preceeding constant bearing the same value

}

add();