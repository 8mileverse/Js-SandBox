const axios = require('axios');

async function getPost(){
    const req = await axios.get('https://jsonplaceholder.typicode.com/posts')
    

    console.log(req.data);
}

getPost();