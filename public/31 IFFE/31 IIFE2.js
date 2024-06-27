

// So how do we deal with this conundrum


(function () {

    const user ='Bradley';

    console.log(user);
    

const greeting = () => console.log('How far my Gee');


greeting();
}) ();



// Brand On 


(function(Brand){


    const user = {


        name: 'David',
        age: 25,
        job: 'Web Developer'



    }

    console.log(`Hi there, my name is ${user.name}, i am ${user.age} years old and I am ${user.job} at ${Brand}. Its nice to meet you`);

})('Microsoft');

