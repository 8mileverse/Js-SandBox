// // Deleting the list Items collection


// single method

// const listItems = document.querySelectorAll('li');

// listItems.forEach((item) => {

//     item.addEventListener('click', (e) =>{

// console.log(e.target);
// e.target.remove();

//     });
// });


// using the parent element


const list = document.querySelector('ul');

list.addEventListener('mouseover', (e) =>{


// removal through the tagname
    if (e.target.tagName === 'LI') {
        e.target.style.color = 'red';
    }

    // console.log(e.target);

});


list.addEventListener('mouseout', (e) =>{


    if(e.target.tagName === 'LI'){


        e.target.style.color = 'black';
    }
});

