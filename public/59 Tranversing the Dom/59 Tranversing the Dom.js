// Getting the Child Elements from the parent element

let output;

const parent =  document.querySelector('.parent');

output = parent.children; // Returns all the child elements of the parent element in an array like structure
output = parent.children[0].innerText; // Returns the first child element of the parent element
output = parent.children[0].className; // Returns the className of the first child element of the parent element
output = parent.children[0].nodeName; // Returns the  Node Name of the first child element of the parent element in this case div

output = parent.children[1].textContent = 'Child Two';
output = parent.children[2].style.color = 'gold';


output = parent.firstElementChild.innerText = 'Child 1'; // Returns the first child element 
output = parent.lastElementChild.innerText = 'Child 3'; // Returns the last child element 


// Get parent elements from the child elements

const child = document.querySelector('.child');

output = child.parentElement; // Returns the parent element of the child element

 child.parentElement.style.border = '1px solid #ccc'; // to add a black border around the parent of the element
// output = child.parentElement.className; // Returns the parent element of the child element in this case the parent class name



//Sibling elements

const siblingElems = document.querySelector('.child:nth-child(2)'); //return the second child element of the child class under the parent element

siblingElems.style.color = 'teal'; // the second child has been given the color of teal
output = siblingElems.nextElementSibling; // Returns the next sibling element under the parent element
output = siblingElems.previousElementSibling; // Returns the next sibling element under the parent element
output.style.color = 'red'; // Returns the next sibling element under the parent element

console.log(siblingElems); //

console.log(output);
// console.dir(output);