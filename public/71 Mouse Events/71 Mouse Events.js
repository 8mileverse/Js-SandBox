const logo = document.querySelector('.logo');
logo.style.cursor = 'pointer';

const onclick = () => console.log('click event');

const onDoubleclick = () => {

    // const currentbg = window.getComputedStyle(document.body).backgroundColor;

    // if(currentbg !== 'Green'){

    //     document.body.style.backgroundColor = 'Green';
    //     document.body.style.color = 'white';

    // }else{

    //     document.body.style.backgroundColor = 'white';
    //     document.body.style.color = 'black';
    // }


    console.log('Double Event Triggered');

};

const onRightclick = () => console.log('right click event');
const onMouseDown = () => console.log('mouse down event');
const onMouseUp = () => console.log('mouse up event');
const onwheel = () => console.log('wheel event');
const onmouseOut = () => console.log('mouse out event');
const onmouseOver = () => console.log('mouse over event');
const ondragstart = () => console.log('dragstart event');
const ondrag = () => console.log('drag event');
const ondragend = () => console.log('dragend event');









// no camelcase is required for the mouse events


logo.addEventListener('click', onclick);
logo.addEventListener('dblclick', onDoubleclick);
logo.addEventListener('contextmenu', onRightclick); // for right click
logo.addEventListener('mousedown', onMouseDown); // for right click
logo.addEventListener('mouseup', onMouseUp); // for right click 
logo.addEventListener('wheel', onwheel); //
logo.addEventListener('mouseover', onmouseOver); // for mouse
logo.addEventListener('mouseout', onmouseOut);
logo.addEventListener('dragstart', ondragstart) // for
logo.addEventListener('drag', ondrag) // for
logo.addEventListener('dragend', ondragend) // for

// for the mouse wheel event
