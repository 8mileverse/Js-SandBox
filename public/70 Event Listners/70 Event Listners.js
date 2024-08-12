// Making use of inline js

// function onclear(){

//  alert("Clear all");

// }

// onclear();


// // making Use of Javascript Externally


// const clearbtn = document.querySelector('#clear');



// const li = document.querySelector('ul');




// clearbtn.onclick = function(){


//     alert("Clear all");
// }


// Using addEventListener

// clearbtn.addEventListener('click', function(){

//     // alert("Clear Some");

//     console.log("Clear All") 

// });




// clearbtn.addEventListener('click', onclear)


// trying to remove the event listener after a specfic timeout

// setTimeout(() => clearbtn.removeEventListener('click', onclear),5000);

// setTimeout(() => clearbtn.click(), 5000);


// Removing all the li in the shopping list 

const clearbtn = document.querySelector('#clear');

function onClearBtn(){

const ItemList = document.querySelector('ul')
const items = ItemList.querySelectorAll('li');

// ItemList.innerHTML = '';
items.forEach(item => item.remove());


}

clearbtn.addEventListener('click', onClearBtn);


// setTimeout(() => clearbtn.removeEventListener('click', onClearBtn), 5000);