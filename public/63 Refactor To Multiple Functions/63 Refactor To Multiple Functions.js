// quick and dirty
function createListItem(item) {
   
    const list = document.createElement('li');
  
  
  
    list.innerHTML = ` ${item}  <button class="remove-item btn-link text-red">
              <i class="fa-solid fa-xmark"></i>
            </button> `
    
     document.querySelector('.items').appendChild(list);
}
createListItem('Poundo Yam');


// Clean and Performant


// Something Like the Parent Function
function createNewItem(item){

    // creating our list item
    const listItem = document.createElement('li');
    //// listItem.textContent = `${item}`;   //this is irrelevant
    
    listItem.appendChild(document.createTextNode(item));
    // creating our button

    const button = createButtons('btn btn-primary remove-item btn-link text-red');

    // const icon = createIcons('fa-solid fa-xmark');  // // note that it will also work here as well if added here

  // button.appendChild(icon);  // append will be destroyed as it has already been called in button
    listItem.appendChild(button);

    document.querySelector('.items').appendChild(listItem);
    // console.log(icon);

} 
// Multiple Functions Refactor


function createButtons(classes) {
    const button = document.createElement('button');
    button.className = classes;

    const icon = createIcons('fa-solid fa-xmark'); 
    button.appendChild(icon)// this will work because the icon is already nested inside the button

    return button;
}
function createIcons(classes) {
    const icon = document.createElement('i');
    icon.className = classes;
    return icon;
    
}


createNewItem('Fried Rice');
createNewItem('coconut Rice');
createNewItem('Egg Salad');


// If consfused, See everything as nested or nesting li/list(button(icon)) so at the end of the whole function the text ends in the parent ending

