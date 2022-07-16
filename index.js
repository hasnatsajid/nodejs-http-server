const http = require('http');

const PORT = 3000;

const server = http.createServer();

server.on('request', (req, res) => {
  const items = req.url.split('/');
  //   res.writeHead(200, {
  //     'Content-Type': 'application/json',
  //   });
  if (items[1] === 'friends') {
    res.setHeader('Content-Type', 'application/json');
    res.statusCode = 200;

    res.end(
      JSON.stringify({
        id: 1,
        name: 'Hasnat sajid',
      })
    );
  } else if (items[1] === 'messages') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<body>');
    res.write('<ul>');
    res.write('<li>list item 1</li>');
    res.write('<li>list item 2</li>');
    res.write('</ul>');
    res.write('</body>');
    res.write('</html>');
    res.end();
  } else {
    res.statusCode = 404;
    res.end('');
  }
});

server.listen(PORT, () => {
  console.log(`Server started on ${PORT}`);
});
