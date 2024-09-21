const apiURL = "https://jsonplaceholder.typicode.com/todos";

const getTodo = () => {
  fetch(apiURL + "?_limit=10")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((todo) => {
        addTodoToDom(todo);
      });
    });
};

const addTodoToDom = (todo) => {
  const div = document.createElement("div");
  div.appendChild(document.createTextNode(todo.title));
  div.classList.add("todo");
  div.setAttribute("data-id", todo.id); // setting the dataName to a custom id, will fetch it using dataset, value

  if (todo.completed === true) {
    div.style.backgroundColor = "lightgreen";
    div.classList.add("done");
  }

  document.getElementById("todo-list").appendChild(div);
  console.log(div);
};

const createTodo = (e) => {
  e.preventDefault();

  const newTodo = {
    title: e.target.firstElementChild.value,
    completed: false,
  };

  fetch(apiURL, {
    // must always follow the order of method, body and headers

    method: "POST",
    body: JSON.stringify(newTodo),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => addTodoToDom(data));
};


const toggleCompleted = (e) => {

    if(e.target.classList.contains('todo')){

        e.target.classList.toggle("done")
    }

    updateTodo()
}

const updateTodo = (id , completed) => {


    

}


const init = () => {
  document.addEventListener("DOMContentLoaded", getTodo);
  document.querySelector("#todo-form").addEventListener("submit", createTodo);
  document.querySelector("#todo-list").addEventListener("click", toggleCompleted);
  
};

init();

