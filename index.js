const http = require('http');

const PORT = 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'application/json',
  });
});

server.listen(PORT, () => {
  console.log(`Server started on ${PORT}`);
});
