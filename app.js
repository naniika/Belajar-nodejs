const http = require("http");
const fs = require("fs");
const url = require("url");
const qString = require("querystring");

http.createServer((req, res) => {
  const access = url.parse(req.url);
  if (access.pathname == "/") {
    res.writeHead(200, {
      "Content-Type": "text/html"
    });
    fs.createReadStream("./tamplates/index.html").pipe(res);
  } else if (access.pathname == "/contact") {
    res.writeHead(200, {
      "Content-Type": "text/html"
    });
    fs.createReadStream("./tamplates/contact.html").pipe(res);
  } else if (access.pathname == "/about") {
    res.writeHead(200, {
      "Content-Type": "text/html"
    });
    fs.createReadStream("./tamplates/about.html").pipe(res);
  } else {
    res.writeHead(404, {
      "Content-Type": "text/html"
    });
    fs.createReadStream("./tamplates/404.html").pipe(res);
  }
}).listen(8080);
console.log("Server sedang berjalan....");