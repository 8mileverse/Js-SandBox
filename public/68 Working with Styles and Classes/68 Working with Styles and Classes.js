// now we will be working on the text, ul and Li elements

const text = document.querySelector('.card');
const itemList = document.querySelector('.item-list');
const items = itemList.querySelectorAll('li');



function run(){

// // ClassName
// console.log(itemList.className);   

// text.className = 'card dark'; // This will override the any active class on the DOM if the existing class is absent


// ClassList

// console.log(itemList.classList) // the result of runnning this will be a DOMTokenList very similar to an Array and we can even use forEach method on it


// itemList.classList.forEach((c) => console.log(c));


// Best way to add class

// text.classList.add('dark');  // you can add to the class list not the class name using add() method
// text.classList.remove('dark'); // you can remove from the class list using remove() method


// we also have a toggle class that os useful for  used for switching between different classes

text.classList.toggle('dark'); // if the class dark is not present it will add it, if it is present it will remove it. Best to use for a single class


// we canalso toggle the hidden class in the style

// text.classList.toggle('hidden'); // if the class hidden is not present it will add it, if it is present it will remove it

//  we can  also toggle to replace two classes

text.classList.replace('.card', 'dark');



// Changing Style Directly

itemList.style.lineHeight = '3';      

items.forEach((item, index) => {
    
    item.style.color = 'blue';

    if(index === 3) {

        item.style.color = 'gold';
    
    
    
    }

});






}


document.querySelector('button').onclick = run