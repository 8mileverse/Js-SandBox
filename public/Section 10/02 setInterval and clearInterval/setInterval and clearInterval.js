// const intervalID = setInterval(changeColor, 2500, 'hELLO tHERE');

// function changeColor(arg){

//     console.log(arg, Date.now())


// }



let intervalID; // note that this is not set to anything


function startChangeColor() {
 
    if(!intervalID){ //its its not set to anything then....let intervalID......

        intervalID = setInterval(changeRandomColor, 1000);
    }

}



function changeRandomColor() {
    const randomColor = document.body.style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16); // code for random hexadecimal color 
    document.body.style.backgroundColor = `#${randomColor}`
}


// function changeColor(){

//     if(document.body.style.backgroundColor !== 'black'){

//         document.body.style.backgroundColor = 'black';
//         document.body.style.color = 'white';
//     }else{
//         document.body.style.backgroundColor = 'white';
//         document.body.style.color = 'black';
//     }

// }


function stopChangeColor(){
    // clearInterval(intervalID); // this will stop the interval when the button is clicked.
    // but if you want to stop the interval after 5 seconds, then use this:
    if(intervalID) {
clearInterval(intervalID);

console.log('color changed')
    }
}

document.querySelector('#start').addEventListener('click', startChangeColor);
document.querySelector('#stop').addEventListener('click', stopChangeColor);