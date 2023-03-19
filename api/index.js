const http = require('node:http');

const server = http.createServer((request, response) => {
  response.setHeader('Content-Type', 'text/plain; charset=UTF-8');

  if (request.url === "/java") {
    response.write(`ジャバ`);
  } else if (request.url === "/moti") {
    response.write(`もち`);
  } else if (request.url === "/moti/moti") {
    response.write(`もち/もち`);
  } else {
    response.write(`分かりません`);
  }

  response.end();
});

server.listen('80', 'localhost');
