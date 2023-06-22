const http = require('http');

const port = 3002; 

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('I Am Happy To Learn Full Stack Web Development From PW Skills!');
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
