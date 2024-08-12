function removeClearBtn() {

    document.querySelector('#clear').remove()

}
removeClearBtn()

// calling a function removeChild from the document list 

// function removeChildFromList(){

//     document.querySelector('li:nth-child(1)').remove();

// }

// removeChildFromList()

function removeChildFromLi(){


    const ul = document.querySelector('ul');
    const li = document.querySelector('li:first-child');


    ul.removeChild(li) // so when dealing with the parent it is i,perative to call removeChild or esle if only reomve() is called, the entire element is removed will be removed under the parent element



}
// removeChildFromLi();

// using psuedoselector
function removeNum(index){

const ul = document.querySelector('ul');
const li = document.querySelector(`li:nth-child(${index})`);

ul.removeChild(li); // so when dealing with the parent it is i,perative to call removeChild or esle if only remove() is called, the entire element is removed will be removed under the parent element

}
removeNum(1)


// Using Array Structure and Node List

function removeNum2(index){

    const ul = document.querySelector('ul');
    // const li = document.querySelectorAll('li')[0]; // all places them in a node list and the corressponding array specifies the number selcted
    
    
    const li = document.querySelectorAll('li')[index - 1]; // all places them in a node list and the corressponding array specifies the number selcted
    
    ul.removeChild(li); 
    
}

removeNum2(1)



// using purely remove() and array


function rem(index){

    const li = document.querySelectorAll('li');

    li[index-1].remove();

}

rem(0);
    
