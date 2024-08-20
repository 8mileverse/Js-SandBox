const btn = document.querySelector('form button');
const div = document.querySelector('form div:nth-child(2)');
const form = document.querySelector('form');


btn.addEventListener('click', (e) => {



    alert('button was clicked');

    e.stopPropagation(); //
});


div.addEventListener('click', () => {

alert('div was clicked');

});

form.addEventListener('click', () => {

    alert('form was clicked');
    
    });