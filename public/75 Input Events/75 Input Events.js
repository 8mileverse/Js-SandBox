const itemInput = document.getElementById('item-input');
const proiorityInput = document.getElementById('priority-input');
const checkbox = document.getElementById('checkbox');
const heading = document.querySelector('h1');


function onInput(e){



heading.textContent= e.target.value
}

function onChecked(e){

    // console.log(e.target.checked);
    
    const isChecked = e.target.checked;

    heading.textContent= isChecked ? 'checked' : 'unchecked';   
}



function onFocus(e){

// console.log(e.target.focus);

itemInput.style.outlineStyle= 'solid';
itemInput.style.outlineWidth= '1px';
itemInput.style.outlineColor= 'black';


}
function onBlur(e){

itemInput.style.outlineStyle = 'none';


}




itemInput.addEventListener('input', onInput);
proiorityInput.addEventListener('change', onInput); // formerly input, change event listener is best used on a select list
checkbox.addEventListener('input', onChecked); // checked for checkboxes change
itemInput.addEventListener('focus', onFocus);
itemInput.addEventListener('blur', onBlur);
