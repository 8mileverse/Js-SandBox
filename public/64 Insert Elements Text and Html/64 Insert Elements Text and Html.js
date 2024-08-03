// insertAdjacentElement

function insertElement(){ // we called the function insertElement


    const filtered = document.querySelector('.filter'); // using the constant filtered to call a dom class element .filter using querySelector


    const heading = document.createElement('h1'); // created an element heading 'h1' and tied it with a constant 'heading'
    heading.textContent = 'Behold the List of Things to Do'; // set the heading to give it text with textContent

    heading.style.fontSize = '30px'; // set the font
    heading.style.padding = '30px 0px 10px 0'; // set the font


    filtered.insertAdjacentElement('afterend', heading); // now calliing the constant filtered again we set the position of where we want to place it on the page, by calling the function insertAdjacentElement where we have the first arguement in 'afterbegin' which tells position and the element to be positioned heading



}

insertElement();


//insertAdjacentText

function insertText(){ // we called the function insertText

    const textItem = document.querySelector('li:first-child'); // we called the function insertText first child of the li element


    const textinput = document.createTextNode(''); //



    textItem.insertAdjacentText('beforebegin', 'First Item'); // calling the constant textItem and calling the function insertAdjacentText where we have the first arguement in 'afterend' which tells position and the text to be positioned ' - First Item'
}

insertText();

//insertAdjacentHTML

function insertHTML(){ // we called the function insertHTML

    const clearBtn = document.querySelector('#clear');

    clearBtn.insertAdjacentHTML('afterend', '<h3>HELLO There</h3>');
}

insertHTML();

// InsertBefore -- Very similar to AppendChild

function insertBeforeItem(){


    const ul = document.querySelector('ul'); // parent element is ul 

    const li = document.createElement('li'); // creating a new li element under the parent element
    li.textContent = 'New Item'; // setting the text content of the new li element

    const thirdUlItem = document.querySelector('li:nth-child(3)'); // 

    ul.insertBefore(li, thirdUlItem); // calling the parent element ul and calling the function insertBefore where we have the first arguement in 'afterend' which tells position and the element to be positioned before the third li element 
}

insertBeforeItem();