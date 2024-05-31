import http from "node:http";
import fs from "node:fs";

http
  .createServer((req, res) => {
    const q = new URL(`http://${req.headers.host}${req.url}`);

    const filename =
      q.pathname === "/" ? "./index.html" : `.${q.pathname}.html`;

    fs.readFile(filename, (err, data) => {
      if (err) {
        res.writeHead(404, { "Content-Type": "text/html" });
        const errorPage = fs.readFileSync("./404.html");
        res.write(errorPage);
        return res.end();
      }
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      return res.end();
    });
  })
  .listen(8080);
