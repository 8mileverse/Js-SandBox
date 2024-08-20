// // Method 1

// window.addEventListener('keydown', (e)=> {

// const insert = document.getElementById('insert');

// insert.innerHTML = `
//      <div class="key">
//        ${e.key === ' ' ? 'Space' : e.key}
//        <small>e.key</small>
//      </div>

//      <div class="key">
//        ${e.keyCode}
//        <small>e.keyCode</small>
//      </div>

//      <div class="key">
//        ${e.code}
//    <small>e.code</small>
// </div>


// <div class="key">
//        ${e.location}
//    <small>e.location</small>
// </div>

//     <div class="key">
//        ${e.which}
//    <small>e.which</small>

// </div>

// `


// });

// Method 2 - Best alternative



function showKeyCodes(e){

   const insert = document.getElementById('insert');
   insert.innerHTML = '';

   const keyCodes = {
 
    'e.key':    `${e.key === ' ' ? 'Space' : e.key}`,
    'e.value': `${e.value}`,
    'e.code':   `${e.code}`,
    'e.keyCode': `${e.keyCode}`,
    'e.which':  `${e.which}`,
    'e.location': `${e.location}`,
    'e.ctrlKey': `${e.ctrlKey}`



   };


   for(let keys in keyCodes) {



    const div = document.createElement('div');
    div.className = 'key';

    const small = document.createElement('small');
   
    const keyText = document.createTextNode(keys) 
    const valueText = document.createTextNode(keyCodes[keys]) 


    small.appendChild(keyText)
    div.appendChild(small)
    div.appendChild(valueText)


    insert.appendChild(div)


   }

}

window.addEventListener('keydown', showKeyCodes );