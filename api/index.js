const http = require('node:http');
const messages = [];

const server = http.createServer((request, response) => {
  response.setHeader('Content-Type', 'text/plain; charset=UTF-8');

  messages.push(request.url);

  let text = "";
  for (const message of messages) {
      text += `${message}\n`;
  }

  response.write(text);
  response.end();
});

server.listen('80', 'localhost');
