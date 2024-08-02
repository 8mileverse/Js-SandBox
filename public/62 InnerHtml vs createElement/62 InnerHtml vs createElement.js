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

function createNewItem(item){

    // creating our list item

    const listItem = document.createElement('li');
    // listItem.textContent = `${item}`;
    listItem.appendChild(document.createTextNode(item));

    // creating our button

    const button = document.createElement('button');
    button.className = 'btn btn-primary remove-item btn-link text-red';


    // console.log(button);

    const icon = document.createElement('i');
    icon.className = 'fa-solid fa-xmark';


    button.appendChild(icon);
    listItem.appendChild(button);

    document.querySelector('.items').appendChild(listItem);
    // console.log(icon);

} 



createNewItem('Fried Rice');


