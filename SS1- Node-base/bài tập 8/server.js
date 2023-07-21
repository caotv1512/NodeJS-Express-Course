const http = require('http');
const port = 3000;
const fs = require('fs');
const url = require('url');
const path = require('path');

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    let readOverview = fs.readFileSync('./view/overview.html', 'utf8');
    let readProduct = fs.readFileSync('./view/product.html', 'utf8');
    const dataJson = JSON.parse(fs.readFileSync('./data/data.json', 'utf8'));
    // console.log(dataJson);
    let cartTemplate = fs.readFileSync('./view/cart-template.html', 'utf8');

    const { query, pathname } = url.parse(req.url, true)
    if (pathname === '/' || pathname === '/overview') {
        const replaceData = dataJson.map((fruit) => {
            return (cartTemplate.replace('{{image}}', fruit.image)
                .replace('{{productName}}', fruit.productName)
                .replace('{{quantity}}', fruit.quantity)
                .replace('{{price}}', fruit.price))
                .replace('{{id}}', fruit.id)
        })
        // console.log(replaceData);
        const renderOverview = readOverview.replace('{{carts}}', replaceData)
        res.write(renderOverview)
    } else if (pathname === '/products') {
        res.write(readProduct)
    } else {
        res.writeHead(302, {
            Location: 'http://localhost:3000/' + 'hhhh',
        });
        // res.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
        res.write(readProduct)
        console.log('cccccc');
        res.end();
    }
    res.end();

    // console.log(readOverview);
})

server.listen(port, () => {
    console.log(`server listen on: http://localhost:${port}`);
})