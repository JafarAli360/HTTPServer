const http = require("http");
const fs = require("fs");

const port = 8000;

const renderHtml = (path, res) => {
  fs.readFile(path, (err, data) => {
    if (err) {
      res.writeHead(404);
      res.write("Error: File Not Found");
    } else {
      res.write(data);
    }
    res.end();
  });
};

http
  .createServer((req, res) => {
    res.writeHead(200, {
      "Content-type": "text/html",
    });
    const url = req.url;

    switch (url) {
      case "/about":
        renderHtml("./about.html", res);
        break;
      case "/galery":
        renderHtml("./galery.html", res);
        break;
      default:
        renderHtml("./index.html", res);
        break;
    }
  })
  .listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
  });
