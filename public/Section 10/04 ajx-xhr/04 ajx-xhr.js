const xhr = new XMLHttpRequest(); // create XMLHttpRequest instance alawys begin with new
const pxhr = new XMLHttpRequest(); // create XMLHttpRequest instance alawys begin with new


// Sepcify method and endpoint/URL
// xhr.open('GET', './movies.json');

xhr.open('GET', './countries.json'); // using the open Method its will take in 2 parameters, the first being an http request and the second being the api or the file(s) where the repormation is stored or kept or simply called endpoint.

// pxhr.open('GET', './movies.json'); // using the open Method to get the movies repormation
pxhr.open('GET', 'https://api.github.com/users/8mileverse/repos'); // using the open Method to get the movies repormation


// readyState has 5 possible values
// - 0: request not initialized
// - 1: server connection established
// - 2: request received
// - 3: processing request
// - 4: request finished and response is ready

    xhr.onReadyStateChange = function () {

    // console.log(this.readyState); //checks the state of the request 2,3,4
    // console.log(this.status);//checks the status of the request 200,304,500..etc



    if(this.readyState === 4 && this.status === 200){



        // console.log(JSON.parse(this.responseText)) // this is to get the value of the data in JSON format to convert it from a string

        

    }
}; //create an eventhandler for the onreadystatechange event





pxhr.onreadystatechange = function () {

    // console.log(this.readyState); //checks the state of the request 2,3,4
    // console.log(this.status);//checks the status of the request 200,304,500..etc



    if(this.readyState === 4 && this.status === 200){



        // console.log(JSON.parse(this.responseText)) // this is to get the value of the data in JSON format to convert it from a string

        const data = JSON.parse(this.responseText);// the data is parsed from a string into a array now

        data.forEach((repo)=> { // idea is to loop throught the movies and place them in a list


            const li = document.createElement('li');
            li.innerHTML = `<img>  ${repo.info} </img>
            
            <strong>${repo.name}</strong>-${repo.description} -${repo.url}`;


            document.querySelector('#results').appendChild(li); // append the movie title to the list of movies.

        })


    }
}; //create an eventhandler for the onreadystatechange event

xhr.send()

pxhr.send()