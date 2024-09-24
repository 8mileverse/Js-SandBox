const apiURL = 'https://jsonplaceholder.typicode.com/todos';

const getTodo = () => {
  // Fetch API data and send to DOM
  fetch(apiURL + '?_limit=10')
    .then((response) => response.json())
    .then((data) => {
      data.forEach((todo) => addTodoToDom(todo));
    })
    .catch((error) => console.log('Error fetching todos:', error));
};

const addTodoToDom = (todo) => {
  // Create new element and append to DOM
  const div = document.createElement('div');
  div.classList.add('todo');
  div.appendChild(document.createTextNode(todo.title));
  div.setAttribute('data-id', todo.id); // Create a custom id

  // Add styling based on the completed state
  if (todo.completed) {
    div.style.backgroundColor = 'lightgreen';
    div.classList.add('done');
  }

  document.getElementById('todo-list').appendChild(div);
};

const createTodo = (e) => {
  e.preventDefault();

  const newTodo = {
    title: e.target.firstElementChild.value,
    completed: false,
  };

  fetch(apiURL, {
    method: 'POST',
    body: JSON.stringify(newTodo),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((res) => res.json())
    .then((data) => addTodoToDom(data))
    .catch((error) => console.log('Error creating todo:', error));
};

const toggleCompleted = (e) => {
  if (e.target.classList.contains('todo')) {
    e.target.classList.toggle('done');
    updateTodo(e.target.dataset.id, e.target.classList.contains('done'));
  }
};

const updateTodo = (id, completed) => {
  fetch(`${apiURL}/${id}`, {
    method: 'PUT',
    body: JSON.stringify({ completed }),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => console.log('Updated Todo:', data))
    .catch((error) => console.log('Error updating todo:', error));
};

const deleteTodo = (e) => {
  if (e.target.classList.contains('todo')) {
    const id = e.target.dataset.id;
    fetch(`${apiURL}/${id}`, {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .then(() => {
        e.target.remove();
        console.log(`Todo with ID ${id} deleted.`);
      })
      .catch((error) => console.log('Error deleting todo:', error));
  }
};

const init = () => {
  document.addEventListener('DOMContentLoaded', getTodo);
  document.querySelector('#todo-form').addEventListener('submit', createTodo);
  document.querySelector('#todo-list').addEventListener('click', toggleCompleted);
  document.querySelector('#todo-list').addEventListener('dblclick', deleteTodo); // Add double-click event for delete functionality
};

init();

// previous version

// const apiURL = 'https://jsonplaceholder.typicode.com/todos';
// const getTodo = () => {
//   // fetch api data and send to DOM
//   fetch(apiURL + '?_limit=10')
//     .then((response) => response.json())
//     .then((data) => 
//       data.forEach((todo) => addTodoToDom(todo))).catch((error) => console.log('Error fetching todos:', error));
//   };

// const addTodoToDom = (todo) => {
//   // add to dom requires that we create a new element and append them to the DOM
//   const div = document.createElement('div');
//   div.classList.add('todo');
//   div.appendChild(document.createTextNode(todo.title));
//   div.setAttribute('data-id', todo.id); // setting the dataName to a custom id, will fetch it using dataset, key and value pair -- purpose of create a custom id

//   if (todo.completed) {
//     div.style.backgroundColor = 'lightgreen';
//     div.classList.add('done');
//   }

//   document.getElementById('todo-list').appendChild(div);
//   // console.log(div);
// };

// const createTodo = (e) => {
//   // this acts as the events that POST the target value of text to the JSON API  and it sets the todo completed as false until toggled
//   e.preventDefault();

//   const newTodo = {
//     title: e.target.firstElementChild.value,
//     completed: false,
//   };

//   fetch(apiURL, {
//     // must always follow the order of method, body and headers

//     method: 'POST',
//     body: JSON.stringify(newTodo),
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   })
//     .then((res) => res.json())
//     .then((data) => addTodoToDom(data)).catch((error) => console.log('Error creating todo:', error));
// };

// const toggleCompleted = (e) => {
//   // returns  true if the user has completed the tasks or not

//   if (e.target.classList.contains('todo')) {
//     e.target.classList.toggle('done');
//   }

//   updateTodo(e.target.dataset.id, e.target.classList.contains('done'))

// };

// const updateTodo = (id, completed) => {
//   fetch(`${apiURL}/${id}`, {
//     method: 'PUT',
//     body: JSON.stringify({ completed }),
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   }).then(response => response.json()).then(data => addTodoToDom(data)).catch(error =>  console.log(error))
    
//   // console.log(id, completed);
// };

// const init = () => {
//   document.addEventListener('DOMContentLoaded', getTodo);
//   document.querySelector('#todo-form').addEventListener('submit', createTodo);
//   document
//     .querySelector('#todo-list')
//     .addEventListener('click', toggleCompleted); // adding the toggleCompleted to the parent id of lists
// };

// init();


// Phase 2

// Event Delegation added to the id todo-list element for toggle functionality on completion of tasks
// create the toggle completed function and pass in the event object
// because the target is assigned to to a div under the todo-list element, we must assign the div with a specific classList that calls to the div class (todo) in the addToDom method
//we can target uing the event delegate, if the target contains the todo classList, toggle done
// then in the completedtoggle function, we call in the function updateTodo

// so then we leve that function and create a new function const updateTodo = (which takes in the parameters id, completed) => {} , so that we can know which id it is and if the task on that id is completed
// now to target the data id, we go to the function updateTodo(and call, (e.target.dataset.id)) in the function togglecomplete
//  not to target the completed aspect updateTodo(e.target.dataset.id, e.target.classList.contains('done)), our target will be the classList if it contains the done class for completion

// now in the function const updateTodo = (id, completed) =>{
// fetch(`${apiURL}/${id}`,{method: 'PUT', headers{'Content-Type': 'application/json'}, body: JSON.stringify({completed})}).then((res)=>{res.json()}).then((data)=>console.long(data))   // //fetch(`/todos/${id}) something very similar to this
//
//
//
// rules when fetching
// Avoid using ""
//
//
//
// }
