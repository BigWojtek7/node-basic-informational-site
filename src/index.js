const express = require('express');
const path = require('path');

const app = express();
const port = 8080;

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'about.html'));
});

app.get('/contact-me', (req, res) => {
  res.sendFile(path.join(__dirname, 'contact-me.html'));
});

app.listen(port, () => {
  console.log(`server listening on port ${port}`)
})

// import http from "node:http";
// import fs from "node:fs";

// http
//   .createServer((req, res) => {
//     const q = new URL(`http://${req.headers.host}${req.url}`);

//     const filename =
//       q.pathname === "/" ? "./index.html" : `.${q.pathname}.html`;

//     fs.readFile(filename, (err, data) => {
//       if (err) {
//         res.writeHead(404, { "Content-Type": "text/html" });
//         const errorPage = fs.readFileSync("./404.html");
//         res.write(errorPage);
//         return res.end();
//       }
//       res.writeHead(200, { "Content-Type": "text/html" });
//       res.write(data);
//       return res.end();
//     });
//   })
//   .listen(8080);
