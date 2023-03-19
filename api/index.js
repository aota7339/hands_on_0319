const http = require('node:http');

const server = http.createServer((request, response) => {
  response.setHeader('Content-Type', 'text/html; charset=UTF-8'); // 変更: plain->html
  response.write(`
    <script type="module">
    </script>
  `);
  response.end();
});

server.listen('80', 'localhost');
