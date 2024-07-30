//querySelectorAll();


const listItems = document.querySelectorAll('li');



// console.log(listItems[0].innerText);

listItems[0].style.color = 'grey';

listItems.forEach((item, index) => {

   // // 'use strict';
    
    // item.style.color ='violet';

    item.classList.add('list-item');


    // if (index === 1) {


    //     item.remove()


    // }


    // if (index === 0){

    //     item.innerHTML = ` Corn
    //         <button class="remove-item btn-link text-red">
    //           <i class="fa-solid fa-xmark"></i>
    //         </button>
        
        
    //     `;
    // }

}); //note: this method ids different from jquery 


const listClass = document.getElementsByClassName('list-item');


console.log(listClass); // gets all the elements with class 'list-item'

// listClass.forEach((item)=> console.log(item)); // this will genereate error as it is not a node list but an HtmlCoolection

// so the above is solved by using Array.from


const listClassArray = Array.from(listClass); //

// console.log(listClassArray); // gets all the elements with class


listClassArray.forEach((item)=> console.log(item.innerText)); // this will print the text content of each list item



// GetElementByTagName


const listClass3 = document.getElementsByTagName('li');

console.log(listClass3[0].innerText); // gets all the elements with class

// console.log(listClass[0].innerText); // gets all the elements with class 'list-item'
// console.log(listClass[1].innerHTML); // gets all the elements with class 'list-item'
// console.log(listClass[3].innerText); // gets all the elements with class 'list-item'
// console.log(listClass[2].innerHTML); // gets all the elements with class 'list-item'

