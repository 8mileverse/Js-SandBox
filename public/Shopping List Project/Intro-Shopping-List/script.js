///// *********GLOBAL VARIABLES********
const itemForm = document.querySelector('#item-form'); //for the form element
const itemInput = document.querySelector('#item-input'); //for the input element
const filterItems = document.querySelector('#filter'); //for the filter element throught the item list
const itemList = document.querySelector('#item-list'); //for the list element under UL element
const clearBtn = document.querySelector('#clear'); // clears all the list items
let formBtn = itemForm.querySelector('button'); // displays the clear button when clicked on the clear button
let isEditMode = false; //false by default




function displayItems(){

    const itemsFromLocalStorage =  getItemFromStorage();
    itemsFromLocalStorage.forEach(item => {


        addItemToDOM(item);

        checkUI()
    });
}


function onAddSubmit(e){ // perfoming the task of adding a new item to the list, Dom and to the localStorage 
         
    e.preventDefault(); // VERY IMPORTANT !!!!!!!!!!!!!!!!

    
    const newItem =  itemInput.value; //validation input for the items inputed in the list
    
    if(newItem === ''){

     alert('Please add an item')
     return;

    }

    if(isEditMode){

        const itemToEdit = itemList.querySelector('.edit-mode'); 

        removeItemFromStorage(itemToEdit.textContent);
        itemToEdit.classList.remove('edit-mode');
        itemToEdit.remove();
        isEditMode = false;
    } else{

        if(checkIfItemExists(newItem)){
            
            alert('Item already exists');
            return;

         }
     }


addItemToDOM(newItem);

addItemToLocalStorage(newItem);
   
checkUI();


itemInput.value = ''; // to clear a single li list item , must be the final entry

}



function addItemToDOM(item){ //  add a new item to the DOM element

    const li_List = document.createElement('li');  //Create the New Item List
   
    li_List.appendChild(document.createTextNode(item)); // in this place we are creating the new item list when data is inputed here. this means when data when data os passed into the constructor newItem, it would be added to the list via appendChild.
 
 
 
 const btn = createButton('remove-item btn-link text-red'); //Button function refactoring
 
 li_List.appendChild(btn); // here we append the button to the list item.
  
 itemList.appendChild(li_List);  //Add the item to the list and to the Dom


}


function addItemToLocalStorage(item) { //Add the item to the localStorage

    const itemsFromLocalStorage =  getItemFromStorage();

    itemsFromLocalStorage.push(item); // Add new item to the array
    localStorage.setItem('items', JSON.stringify(itemsFromLocalStorage)); // stringify the array into a JSON string and store it in local storage.
}

function getItemFromStorage(item) {

    let itemsFromLocalStorage; //  represents items from local storage and the items (key, value)
    if (localStorage.getItem('items') === null) {
    
        itemsFromLocalStorage = []; // if there are no items in the local storage, initialize it as an empty array.

    }else{


        itemsFromLocalStorage = JSON.parse(localStorage.getItem('items')); // parse the JSON string from local storage into an array.
    }

    return itemsFromLocalStorage;
}

function createButton(classes){  //button class for the function()

const button = document.createElement('Button');
button.className = classes; //the button has been set to the className 'classes' which has been refactored above in the onAddSubmit().


const icon = createIcon('fa-solid fa-xmark')
button.appendChild(icon); //icon has been appended to the button
return button;

}


function createIcon(classes){ // for the icon class ().


    const icon = document.createElement('i'); // create the icon element
    icon.className = classes; // set the icon to the classes which has been refactored above in the onAddSubmit().
    return icon;

}


function onClickItem(e){

    if(e.target.parentElement.classList.contains('remove-item')){ // this will call the remove funtion on the dom

        onRemoveItems(e.target.parentElement.parentElement);
    }else{

        setItemToEdit(e.target);
    }

    
}

function setItemToEdit(item){

isEditMode = true;
itemList 
.querySelectorAll('li')
.forEach((i) => i.classList.remove('edit-mode'));

item.classList.add('edit-mode');

formBtn.innerHTML = '<i class="fa-solid fa-pen"></i> Update Item';
formBtn.style.backgroundColor = '#228b2c';
itemInput.value = item.textContent; // sets the input value to the text content of the item clicked on.

}
function onRemoveItems(item){
    
    
    if(confirm(`Are you sure you want to remove this item?`)){

        
        item.remove(); // this will remove the parent of the parent (li_List) when the remove-item button is clicked. RemoveItemFromDom
        
        removeItemFromStorage(item.textContent)   //removeItemFromStorage text content only. use of refactoring
    }
    

checkUI();
 


}


function removeItemFromStorage(items){

 let itemsFromLocalStorage =  getItemFromStorage(); // get all items from local storage // first step to remove all items from local storage is to fetch ot first

 
 itemsFromLocalStorage = itemsFromLocalStorage.filter((i) => i !==  items);  //filter out items from local storage to be removed

 localStorage.setItem('items', JSON.stringify(itemsFromLocalStorage)); // stringify the updated array back into a JSON string and store it in local storage.

}

function onClearAll(e){

    // itemList.innerHTML = ''; //this will clear all the list items when the clear button is clicked. Laziest Method to clear

    while(itemList.firstChild){
        itemList.removeChild(itemList.firstChild); // remove the child from the list item through remove


    }

    localStorage.removeItem('items');//clear from loaclStorage
    checkUI()

}

function onFilterItems(e){
    const items = document.querySelectorAll('li');

    const filterText = e.target.value.toLowerCase();
    

    items.forEach(item => {

     const itemName = item.firstChild.textContent.toLowerCase(); // get the text of the list item. convert it to lowercase for comparison.
    

     if(itemName.indexOf(filterText) !=-1){ // if the list item contains the filter text then remove it then the list from the index(a-z, 0-9, and all others) then add it to the list

     item.style.display = 'flex';

     }else{

        item.style.display = 'none';
     }

    });

    
    }


function checkUI(e){

    itemInput.value = '';

    const items = document.querySelectorAll('li');

if(items.length === 0 ){

    clearBtn.style.display = 'none';
    filterItems.style.display = 'none';

    
}else{

    clearBtn.style.display = 'block';
    filterItems.style.display = 'block';


    formBtn.innerHTML = '<i class="fa-solid fa-plus"></i> Add Items';
    formBtn.style.backgroundColor = '#333';

    isEditMode = false;

}



}

function checkIfItemExists(item) {


    const itemsFromLocalStorage = getItemFromStorage();

    return itemsFromLocalStorage.includes(item); 

}


function init(){

itemForm.addEventListener( 'submit' , onAddSubmit); //for the submit button of the form
itemList.addEventListener( 'click' , onClickItem ); //for the removal of the items
clearBtn.addEventListener( 'click', onClearAll ); //for the clear btn
filterItems.addEventListener('input', onFilterItems);
document.addEventListener('DOMContentLoaded', displayItems)

checkUI();
}




init()


// // practice

// localStorage.setItem('filters', 'kogi');
// console.log(localStorage.getItem('filters')); //

// localStorage.clear();