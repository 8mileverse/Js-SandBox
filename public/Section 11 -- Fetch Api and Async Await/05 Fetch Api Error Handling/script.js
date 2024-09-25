// fetch('http://httpstat.us/404')
// .then((response) => {
//         return response
// }).then(() => {
//     console.log('sucess')
// });

// learn the format of the response

// fetch('http://hellowtf.us')
//   .then((response) => {
//     return response;
//   })
//   .then(() => {
//     console.log('sucess');
//   })
//   .catch((error) => console.log(error)); //.catch((error) => console.log(error)), works best here as the url code and endpoint doesn't exist

// // catch runs on a network error


// fetch('http://httpstat.us/404')
// .then((response) => {

//     console.log(response.status, response.ok, response.statusText)
//     return response
// }).catch((err) => {

//     console.log(err)
// });


//Testing with Response.ok

// fetch('http://httpstat.us/404')
// .then((response) => {

//     if(!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//     }
//     else{
//         return response;
//         console.log('its all good');
//     }

    
// }).then((data) => {

//     console.log(data)
// }).catch((error) => {

//     console.log(error) // tied to throw new Error
// });
// // result would be the `HTTP error! status: ${response.status}`,  as it is thrown into the error handler




// Checking for Specific Status Codes
fetch('http://httpstat.us/200')
.then((response) => {

    if(response.status === 404) {
        throw new Error(` Not Found ${response.status}`);
    }
    else if(response.status === 500){

        throw new Error(` Server Error ${response.status}`);
    }
    else if(response.status !== 200 ){

        throw new Error(` Request Failed due to: ${response.statusText}`);
    }
   
    
}).then(() => {

    console.log('Success')
}).catch((error) => {

    console.log(error) // tied to throw new Error
});