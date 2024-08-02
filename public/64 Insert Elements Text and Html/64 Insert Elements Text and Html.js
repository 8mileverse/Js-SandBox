// insertAdjacent

function insertElement(){


    const filtered = document.querySelector('.filter');


    const heading = document.createElement('h1');
    heading.textContent = 'Behold the List of Things to Do';


    filtered.insertAdjacentElement('afterbegin', heading);



}

insertElement();
