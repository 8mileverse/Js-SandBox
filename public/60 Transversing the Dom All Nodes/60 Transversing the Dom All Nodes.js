let output;

const parent = document.querySelector('.parent');


output = parent.childNodes;
output = parent.childNodes[5].nodeName;
output = parent.childNodes[5].outerHTML;


output = parent.childNodes[5].innerText = 'Child Two';
output = parent.childNodes[5].style.backgroundColor = ' grey';

// Node.textContent returns the text content of a node and its descendants.

output = parent.firstChild;
output = parent.lastChild.textContent = 'last child';


console.log(output);


// getting parents node from  the child nodes

let result;

const child = document.querySelector('.child');

result = child.parentNode; // would still work with parent element 

result = child.parentNode.style.backgroundColor = 'green';
child.parentNode.style.padding = '10px';


//sibling nodes

const sibling2 = document.querySelector('.child:nth-child(2)'); // using :nth-child id how u utilize the sibling class of the parent element, in this case the first one has beem selected

result = sibling2.previousSibling.innerText; // returns the previous sibling element

console.log(result);

