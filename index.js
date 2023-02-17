const http = require('http');
const app = require('./app');

app.set('port', 3030);
const server = http.createServer(app);

server.listen(3030);