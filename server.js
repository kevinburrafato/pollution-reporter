const http = require('http');
const app = require('./app.js');

require('dotenv').config()
const port = process.env.RUNNING_PORT;

const server = http.createServer(app);

server.listen(port);