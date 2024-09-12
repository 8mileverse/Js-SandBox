// Undercallback Hell


function getData(endpoint, callback){


    const xhr = new XMLHttpRequest();

    xhr.open('GET', endpoint);

    xhr.onreadystatechange = function(){


        if(this.readyState === 4 && this.status === 200){


            callback(JSON.parse(this.responseText));

        }
    }
    
    //using a set timeout

    setTimeout(() => {

        xhr.send();

    }, Math.floor(Math.random() * 3000) + 1000 );
     
}

getData('./movies.json', (data) => {

 console.log(data);
 getData('./actors.json', (data) => {

    console.log(data);
    getData('./directors.json' , (data) => {

        console.log(data);
       
       });
   });

});


