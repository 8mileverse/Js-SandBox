const logo = document.querySelector('img');


function onClick(e){


    // Using The Target Object

    console.log(e.target); // This will give you the element that was clicked on. In this case, it's the logo.
    e.target.style.backgroundColor = 'lightblue';

    

    // using the current Target Object

    console.log(e.currentTarget); // This will give you the element that the event listener was attached to. In this case, it's the logo.

    // using the type

    console.log(e.type); // This will give you the type of event (in this case, 'click')

    //TimeStamp

    console.log(e.timeStamp); // This will give you the time in milliseconds since the event was fired.

    //client x and y coordinates

    console.log(e.clientX, e.clientY); // These will give you the x and y coordinates of the mouse relative to the client area of the window.

    // offset x and y

    console.log(e.offsetX, e.offsetY); // These will give you the x and y coordinates of the mouse relative to the element that the event listener was attached to.

    // Page X and Y coordinates

    console.log(e.pageX, e.pageY); // These will give you the x and y coordinates of the mouse relative to the document.


    // screen x and y coordinates

    console.log(e.screenX, e.screenY); // These will give you the x and y coordinates of the mouse relative to the screen.


}

function onDrag(e){


    document.querySelector('h1').textContent = `X ${e.clientX} , Y ${e.clientY}`
    
}


logo.addEventListener('click', onClick);
logo.addEventListener('drag', onDrag);





    // const itemList = document.getElementById('itemList');

    // itemList.addEventListener('click', function(e) {
    //     if (e.target.tagName === 'LI') {
    //         // e.target.style.backgroundColor = 'yellow';
    //         console.log(`Clicked on: ${e.target.textContent}`);
    //     }
    // });
