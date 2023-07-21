const http = require('http');
const url = require('url');
const port = 3000;

const server = http.createServer((req, res) => {
    const { query, pathname } = url.parse(req.url, true);
    res.writeHead(200, { 'Content-Type': 'text/html' })
    
    if (pathname === '/' || pathname === '/home') {
        res.write('<h1> Wellcome to Home page </h1>');
    } else if (pathname === '/product') {
        res.write('<h1> Wellcome to Product page </h1>');
    } else if (pathname === '/Contact') {
        res.write('<h1> Wellcome to Contact page </h1>');
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html' })
        res.write('<h1> 404  page not found </h1>');
    }
    res.end()
})

server.listen(port, "127.0.0.1", function () {
    console.log(`listening on http://localhost:${port}`);
})