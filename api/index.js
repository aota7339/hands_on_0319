const http = require('node:http');

const server = http.createServer((request, response) => {
  response.setHeader('Content-Type', 'text/plain; charset=UTF-8');
  response.write(`初HP。${request.url}`);
  response.end();
});

server.listen('80', 'localhost');
