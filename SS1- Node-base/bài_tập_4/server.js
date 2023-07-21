const http = require('http');
const port= 3000;
const fs = require('fs');
const server = http.createServer((req,res) => {
// b1: Khởi tạo server
// b2: Tạo folder txt có file final.txt
// b3: require fs vào và sử dụng hàm fs.readFileSync
const readFinal = fs.readFileSync('./txt/final.txt', 'utf8');
console.log(readFinal);
// b4: in ra màn hình client
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf8'});
    res.write(readFinal);
    res.end();
})


server.listen(port, ()=>{
    console.log(`listening on port: http://localhost:${port}`);
})