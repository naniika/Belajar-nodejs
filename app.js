const http = require("http");
const fs = require("fs");
const url = require("url");

http
  .createServer((req, res) => {
    const access = url.parse(req.url);
    const route =
      access.pathname == "/"
        ? {
            file: "./tamplates/index.html"
          }
        : access.pathname == "/contact"
        ? {
            file: "./tamplates/contact.html"
          }
        : access.pathname == "/about"
        ? {
            file: "./tamplates/about.html"
          }
        : {
            file: "./tamplates/404.html"
          };
    res.writeHead(200, {
      "Content-Type": "text/html"
    });
    fs.createReadStream(route.file).pipe(res);
  })
  .listen(8080);
console.log("Server sedang berjalan....");
