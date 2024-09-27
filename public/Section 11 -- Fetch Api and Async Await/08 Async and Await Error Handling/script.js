const getUser = async () => {
  try {
    // const res = await fetch(`https://jsonplaceholder.typicode.com/users`)

    const res = await fetch("https://httpstat.us/500");
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    const data = await res.text();

    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

getUser();

const getPosts = async () => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);

    const res = await fetch("https://httpstat.us/500");
  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`);
  }
  const data = await res.text();

  console.log(data);
};

getPosts().catch(error => console.log(` ${error}`)); //
