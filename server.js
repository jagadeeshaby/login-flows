// Import builtin NodeJS modules to instantiate the service
const https = require("https");
const fs = require("fs");
const helmet = require("helmet");


// Import the express module
const express = require("express");

// Instantiate an Express application
const app = express();

https
    .createServer({
        key: fs.readFileSync("cert/localhost-key.pem"),
        cert: fs.readFileSync("cert/localhost.pem"),
    }, app)
    .listen(5000, () => {
        console.log('server is runing at port 5000')
    });

app.use(express.static('public'));
