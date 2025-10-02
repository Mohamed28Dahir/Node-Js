const http  = require('http');

const server = http.createServer((req ,res)=>{
    res.writeHead(200,{"content-type": "application/json"});
    res.end("Hello welcome to nodejs course!");
})

const PORT = 8000

server.listen(PORT,()=>{
    console.log("Server is Running on Port:" , PORT);
});
