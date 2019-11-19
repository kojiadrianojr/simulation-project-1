const jsonServer = require('json-server');
const bodyParser = require('body-parser');
//To use the .env file 
require('dotenv/config')

//imports local file
const middleware = require('./server-controller/middleware');

//server create 
const server = jsonServer.create();
const router = jsonServer.router('./db.json');

//To use post, patch, etc.
server.use(bodyParser.json());
server.use(jsonServer.defaults())
server.use(middleware)

//add methods

server.use(router)

const PORT = process.env.PORT || 5000
server.listen(PORT, () => {
    console.log(` 
    Now listening d(^_^)b  at PORT:${PORT} 
    RESOURCES
     http://localhost:${PORT}/users
    `);
})
