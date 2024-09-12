

// function toggle(e) {
  
//     e.target.classList.toggle('danger') // event target the classList of the button and assigns it to the class danger
// }




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


function createPost(post, cb){


    setTimeout(function (){
        posts.push(post); // when adding new posts or creating new posts .push is highly recommended;

        cb() //calling the fuction getpost of the parameter cb
    },2000);

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


createPost({title: 'Fourth Post', content: 'This is the fourth post'}, getPost) // pasing as the arguments in the parameters in CreatePost()





document.querySelector('button').addEventListener('click', getPost); // takes in a click event and a toggle callback function




//note: at this time create post has not been called to the dom so we will pass a convenction cb in the create post function