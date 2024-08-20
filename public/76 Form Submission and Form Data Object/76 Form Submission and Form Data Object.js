const getForm =  document.getElementById('item-form');


function onSubmit(e) {



    // console.log('submit')    


    e.preventDefault(); // this will prevent the form from submitting and reloading on the same page


    const item = document.getElementById('item-input').value;
    
    
    const priority = document.getElementById('priority-input').value;




    if (item === '' || priority === '0') {


        alert('Please fill in all fields');
        return;
    }

    
    console.log(`item: ${item}: ${priority}`);
}



function onSub(e){
e.preventDefault();


const formData = new FormData(getForm); // passing getForm from the global scope

// const item = formData.get('item');

// const priority = formData.get('priority');


const entries = formData.entries('');

// console.log(item, priority);


for (let entry of entries) {


    console.log(entry);
 }

// console.log(formData.toString()); // this will print all form data as a string


// console.log(formData)


}


getForm.addEventListener('submit', onSub);






