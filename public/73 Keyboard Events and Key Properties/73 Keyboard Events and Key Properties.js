const itemInput = document.getElementById('iteminput');


// const onKeyPress = (e) => {console.log('onKeyPress')};
// const onKeyUp = (e) => {console.log('onKeyUp')};
const onKeyDown = (e) => {
    
    
    
      //key

    // console.log(e.key);

    // document.querySelector('h1').textContent = e.key;


    //keycode

//https://www.toptal.com/developers/keycode/table-of-all-keycodes


// if(e.keyCode === 13 ){


//     alert('Enter key pressed');
// }

    //code

// console.log(e.code);


if (e.repeat) {


   console.log(`Key ${e.key} repeat detected`);

 

}

console.log(`Shift:` + e.shiftKey);
console.log(`Control:` + e.ctrlKey);
console.log(`Alt:` + e.altKey);
};

// itemInput.addEventListener('keypress', onKeyPress);
// itemInput.addEventListener('keyup', onKeyUp);
itemInput.addEventListener('keydown', onKeyDown);