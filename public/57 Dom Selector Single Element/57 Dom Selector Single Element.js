// document.getElementById()


console.log(document.getElementById('item-form'))
console.log(document.getElementById('item-form').id) //This accesses the id property of the element that was retrieved. Since getElementById returns an element object, you can use dot notation to access its properties. The id property holds the value of the element's ID attribute.
console.log(document.getElementById('item-form').className) //This accesses the id property of the element that was retrieved. Since getElementById returns an element object, you can use dot notation to access its properties. The id property holds the value of the element's ID attribute.

console.log(document.getElementById('item-form').getAttribute('id')) //This accesses the id property of the element)


//Set Attributes

console.log(document.getElementById('title'))
// document.getElementById('title').id = 'new-item-form'; // thsi has caused the form id to be change to 'new-item-form'
document.getElementById('title').title = 'Shopping List'; // shopping list will be displayed on hover on the title it is called
document.getElementById('title').setAttribute('class', 'list-type');


const title = document.getElementById('title');

console.log(title.setAttribute('value', 'red')); // new-item-form


// for getElementBy, it is usd to get/change/modify/add the content within the element

console.log(title.textContent) // this will get the text content inside it 

title.textContent = 'Task List'; // this will change the text content inside the element to 'task list'
title.innerText = 'Task List of War'; // this will change the text content inside the element to 'task list' same as textContent
title.innerHTML = '<strong>Shopping List</strong>';

// we can also use this to Change the css style
title.style.color = 'gold';
title.style.backgroundColor = 'black';


//usng Single Elemnts for querySelector
console.log(document.querySelector('h1')); // selects the first id its is called on
console.log(document.querySelector('#title')); // selects the first id by id attribute

console.log(document.querySelector('.container')); // calls iut the class  selecter on the container
console.log(document.querySelector('input[type="text"]')); // calls iut the class selecter on the

// Making Use of pseudo-class names 

// console.log(document.querySelector('input[type="text"]:focus')); // selects the first input field that has focus


console.log(document.querySelector('li:nth-child(3)').innerText);

const second = document.querySelector('li:nth-child(3)');

second.innerText = 'system';

second.style.backgroundColor = 'grey'

const thr = document.body.style.backgroundColor = 'light-grey';  


// use these elements other than the document on the elements

const ul_list = document.querySelector('ul');

console.log(ul_list); // gets all children of the ul

const exo = ul_list.querySelector('li:nth-child(4)');

exo.style.color = 'blue'; // gets the first child of the ul