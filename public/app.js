// Array to hold our tasks
// let tasks = [];

// // Function to add a new task
// function addTask() {
//     const taskInput = document.getElementById('taskInput');
//     const taskText = taskInput.value;

//     if (taskText) {
//         const task = {
//             text: taskText,
//             completed: false
//         };
//         tasks.push(task);
//         taskInput.value = '';
//         renderTasks();
//     }
// }

// Function to mark a task as completed
// function toggleTask(index) {
//     tasks[index].completed = !tasks[index].completed;
//     renderTasks();
// }

// // Function to render the list of tasks
// function renderTasks() {
//     const taskList = document.getElementById('taskList');
//     taskList.innerHTML = '';

//     tasks.forEach((task, index) => {
//         const taskItem = document.createElement('li');
//         taskItem.className = 'task' + (task.completed ? ' completed' : '');
//         taskItem.innerHTML = `
//             ${task.text}
//             <button onclick="toggleTask(${index})">Toggle</button>
//         `;
//         taskList.appendChild(taskItem);
//     });
// }


  const S = new String('Bingo Oledger');
  y = S.indexOf('B');
  y = S.charAt(0);
y = S.length;

y = S.substring(0,5);




console.log(S);


