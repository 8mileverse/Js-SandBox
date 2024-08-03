// Using Replace With

function replaceFirstItem(){


    const firstItem = document.querySelector('li')

    const newItem = document.createElement('li')
    newItem.textContent = 'Keep Moving Forward';


    firstItem.replaceWith(newItem);
}

replaceFirstItem()


//Using Outer Html to replace

function replaceSecondItem(){


    const secondItem = document.querySelector('li:nth-child(2)');

    secondItem.outerHTML = '<li>Replaced Second Item</li>';



}

replaceSecondItem()


// using functions to replace all the li items

function replaceAllItems(){

    const listItems = document.querySelectorAll('li')

    listItems.forEach((item, index) => {
        item.textContent = 'Replaced All Items';


        if (index === 3){

            // console.log('Replaced already from above');

            item.textContent = 'WELCOME hOME pOrty'
        }


        
        
        
    })
    
    // now in place of if statements we could also use a tenary function or implicit to work this out for example below using foreach

    listItems.forEach((item , index) => {


        item.outerHTML = index === 1 ? '<li>Second Item</li>' : '<li>Third Item</li>';



    });

}

replaceAllItems()



// replace using the parent element to replace the child with replacec child


function replaceChildElement (){



    const header = document.querySelector('header');

    const heading = document.querySelector(' header h1');

const h2 = document.createElement('h2');
h2.id = ' app-title';

h2.textContent = 'New App Title Lister';

header.replaceChild(h2, heading);

// Personal Note: replacing item : h2 will come first, replaced item : heading will follow subsequently




}

replaceChildElement()

