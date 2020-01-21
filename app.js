const http = require("http");
const fs = require("fs");
http.createServer((req, res) => {
  const a = (req.url == "/") ? { // index.html
    code: 200,
    file: "index.html"
  } : (req.url == "/about") ? { // about.html
    code: 200,
    file: "about.html"
  } : (req.url == "/contact") ? { // contact.html
    code: 200,
    file: "contact.html"
  } : { // 404.html
    code: 404,
    file: "404.html"
  }
  res.writeHead(a.code, {
    "Content-Type": "text/html"
  });
  fs.createReadStream("./tamplates/" + a.file).pipe(res);
}).listen(8080);
console.log("Server sedang berjalan....");