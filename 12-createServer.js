const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("welcome to our hompage");
  }
  if (req.url === "/about") {
    res.end("here is our short history");
  }
  res.end(`<h1>Oops! </h1>
  <p> We cant seem to fith the page you are looking</p>
  <a href="/">back home</a>`);
});

server.listen(5000);
