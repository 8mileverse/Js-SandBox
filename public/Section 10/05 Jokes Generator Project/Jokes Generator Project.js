const joke= document.querySelector('#joke');
const jokeBtn = document.querySelector('#joke-btn');




function jokeGen() {
    
    const xhr = new XMLHttpRequest();

  
    xhr.open('GET', 'https://api.chucknorris.io/jokes/random');

  xhr.onreadystatechange = function () {
    if (this.readyState === 4) {
      if (this.status === 200) {
        joke.innerHTML = JSON.parse(this.responseText).value;
      } else {
        joke.innerHTML = 'Something went wrong (Not Funny)';
      }
    }
  };

  xhr.send();
}


jokeBtn.addEventListener('click', jokeGen);



// const joke = document.querySelector('#joke');
// const jokeBtn = document.querySelector('#joke-btn');

// function jokeGen() {
//   fetch('https://api.chucknorris.io/jokes/random')
//     .then(response => {
//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }
//       return response.json();
//     })
//     .then(data => {
//       joke.innerHTML = data.value;
//     })
//     .catch(error => {
//       joke.innerHTML = 'Something went wrong (Not Funny)';
//       console.error('There was a problem with the fetch operation:', error);
//     });
// }

// jokeBtn.addEventListener('click', jokeGen);
