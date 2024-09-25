const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ name: "John Snow", age: 34 });
  }, 1000);
});

async function getPromise() {
  const response = await promise;
  console.log(response);
}

getPromise();

// fetching fom an api

async function getUser() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const res = await response.json();

  console.log(res);
}

getUser();

const getPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const res = await response.json();

  console.log(res);
};

getPosts();
