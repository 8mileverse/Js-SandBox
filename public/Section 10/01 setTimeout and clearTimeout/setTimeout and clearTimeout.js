// setTimeout(changeText, 3000); //function must always preceed the timeout | function to change text after 3 secs timeout

function changeText(){

    document.querySelector('h1').textContent = 'Hello from Callback' ; // text would be changed after 3 secs timeout
}

const timerId = setTimeout(changeText, 3000); //

document.querySelector('#cancel').addEventListener('click', () => {

    console.log(timerId);
    clearTimeout(timerId); // canceling the timer
    console.log('Timer Cancelled');
}); //
