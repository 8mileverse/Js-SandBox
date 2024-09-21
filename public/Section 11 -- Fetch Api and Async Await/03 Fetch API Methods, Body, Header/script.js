function createPost(title, body){ // using destructuring function

    fetch('https://jsonplaceholder.typicode.com/posts', {

        method:'POST',
        body: JSON.stringify({

            title,
            body,
            

        }),
        headers: {
            'Content-Type': 'application/json',
            token: 'abc123',
            }
    
         
    
        
    }).then((res)=> res.json())
    .then((data)=> console.log(data)) 
    .catch((err)=> console.log(err))

   
    
}


createPost({

    title: 'My First Post',
    body: 'This is my first post',
   
 
})