const http = require("http");
const fs = require("fs");
const posts = [
  {
    id: 1,
    title: "First Post",
    content: "This is the content of the first post",
  },
  {
    id: 2,
    title: "Second Post",
    content: "This is the content of the second post",
  },
];

const server = http.createServer((req, res) => {
  const url = req.url;

  if (url === "/") {
    fs.readFile("index.html", "utf8", (err, data) => {
      if (err) {
        res.writeHead(505, { "content-type": "text/html" });
        res.end("<h1>Sorry, We Have A Problem</h1>");
      } else {
        res.writeHead(200, { "content-type": "text/html" });
        res.end(data);
      }
    });
  }
  
  else if (url === "/about") {
    res.writeHead(200, { "content-type": "text/html" });
    res.end("<h1>About</h1>");
  } 
  
  else if (url === "/api/posts") {
    res.writeHead(200, { "content-type": "application/json" });
    res.end(JSON.stringify({
        success: true,
        data: posts
    }));
  } 
  
  else {
    res.writeHead(404, { "content-type": "text.html" });
    res.end("<h1>Page Not Found</h1>");
  }
});

server.listen(5000, () => {
  console.log("Server is running on port 5000");
});
