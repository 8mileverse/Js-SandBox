// Function declaration

function addDollarSign(value) {

      const david = {

        name: 'David',
        age: 25,
        job: 'Web Developer',
        hobbies: ['coding', 'eating', 'drinking']
      }

    return `${david.name}, the ${david.job} who leaves down the street just gave me $`+ value;

}


console.log(addDollarSign(10000));


// Function expressions


const myLove = function(value) {


return `${value} will always be my love forever`;


};  // end function. always best to end on a semicolon when dealing with functions expressions


console.log(myLove('my love forever'))



console.log(isTrueReally('Yes'));


function isTrueReally(answer) {

return answer, 'I am not gay nor do i condone it';

}