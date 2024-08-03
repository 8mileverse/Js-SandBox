function insertAfter(newEl, existingEl){

    existingEl.parentElement.insertBefore(newEl, existingEl);
    existingEl.parentElement.insertBefore(newEl, existingEl.nextSibling);

}



const newElement = document.createElement('li');
    newElement.textContent = 'New Item';


    const targetElement = document.querySelector('li:nth-child(2)');
insertAfter(newElement, targetElement);


//if you have tried to place the code in a function and it didnt work, The reason the function did not work is that it only logs the parent node of existingEl but does not actually insert the newEl into the DOM. The console.log statement is purely for debugging purposes and does not perform any modifications to the DOM structure.