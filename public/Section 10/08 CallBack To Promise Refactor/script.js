const posts = [
    {
        title: 'First Post',
        content: 'This is the first post',
        author: 'John Doe',
        date: '2015'

    },
    {
        title: 'Second Post',
        content: 'This is the second post',
        author: 'Jane Doe',
        date: '2016'
    },
    {
        title: 'Third Post',
        content: 'This is the third post',
        author: 'John Doe',
        date: '2017'
    }
];


function createPost(post){ // create a new post using promise callback and setTimeout
    
    return new Promise((resolve, reject) => {

        let error = true;
        if(!error){ // when dealing with promise errors instead of specifying the error use !error
        
        setTimeout(function (){ //how long it takes to create a new post

        posts.push(post); // when adding new posts or creating new posts .push is highly recommended;
        resolve()
        },2000);
    }else{
    reject('Something went wrong') // rejecting the promise if there is an error
    }

       }) //rewrap everything in a promise


}


function getPost(e){
    setTimeout(() => {
      posts.forEach(function (post){
      const div = document.createElement('div');
      div.innerHTML = `<strong>${post.title}</strong>-${post.content}`;
      document.querySelector('#posts').appendChild(div); //appending the newly created div to the dociment where post resides
   });
  }, 1000)//get thsis post using forEach method
}


function ShowError(error){
   
    const h2 = document.createElement('h2');
    h2.innerHTML = `<strong>${error}</strong>`;

    document.querySelector('#posts').appendChild(h2); //appending the newly created div to the dociment where post resides
}


createPost({title: 'Fourth Post', content: 'This is the fourth post'})
.then((getPost)) // pasing as the arguments in the parameters in CreatePost()
.catch((ShowError))

//note: at this time create post has not been called to the dom so we will pass a convenction cb in the create post function