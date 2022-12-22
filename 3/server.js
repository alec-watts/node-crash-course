const { resolveSoa } = require('dns/promises');
const http = require('http');
const fs = require('fs');
const { rawListeners } = require('process');
const _ = require('lodash');


// callback function runs every time a request comes 
// in to server.
// Server is going to send the homepage
// req: the request url, request type (get, post)
// res: object we use to send respnse to user
const server = http.createServer((req, res) => {
    
    const num = _.random(0, 20);
    console.log(num);
    
    const greet = _.once(() => {
        console.log('hello');
    })

    greet()
    greet()
    
    console.log(req.url, req.method);
    // set header content type
    // write content
    // end response: sends content back to the browser
    res.setHeader('Content-Type', 'text/html');

    let path = './views/';
    switch(req.url) {
        case '/':
            path += 'index.html'
            res.statusCode = 200;
            break;
        case '/about':
            path += 'about.html'
            res.statusCode = 200;
            break;
        case '/about-me':
            // resource has been permanantly move and we would like to redirect
            res.statusCode = 301
            res.setHeader('location', 'about')
            res.end();
        default:
            path += '404.html'
            res.statusCode = 404;
            break; 
    }

    fs.readFile(path, (err, data) => {
        if(err) {
            console.log(err);
            res.end();
        } else {
            res.end(data);
        }
    });
});


// localhost: look for requests coming to our own computer
// 3000 is a common port # for local dev
// browset: localhost:3000
server.listen(3000, 'localhost', () => {
    console.log('listening for requests on port 3000');
});