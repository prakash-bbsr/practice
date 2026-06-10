//Import Http module
const http = require('http');

//Create an HTTP server using createServer method
const server = http.createServer((req,res) => {
    //Handel incoming request
    res.end("Hello, World");
});
const port = 3000;
server.listen(port,()=>{
    console.log(`Server listening on port ${port}`);
});