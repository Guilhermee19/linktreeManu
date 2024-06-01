const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

import dotenv from 'dotenv';
// Carregar variáveis de ambiente do arquivo .env
dotenv.config();

const port = process.env.PORT || 3100;

server.use(middlewares);
server.use(router);

server.listen(port);
console.log('JSON Server is running on port \x1b[1;32m' + port + '\x1b[1;30m \n');
