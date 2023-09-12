const http = require("http")

const port = 2000;

const server = http.createServer((req, res) =>{
    if (req.url === "/"){
        res.writeHead(200, {"content-type": "text/html"});
        res.write(`<html><body><p>This is my home page </p></body></html>`)
        res.end()
    }else if(req.url === "/about"){
        res.writeHead(200, {"content-types":"text/html"});
        res.write(`<html><body><p>This is my About page </p></body></html>`)
        res.end();
    }else if(req.url === "/contact"){
        res.writeHead(200, {"content-types": "text/html"})
        res.write(`<html><body><p>this is my contact page </p></body></html>`)
        res.end();
    }else res.end("Invalid Request")
})

server.listen(port, () =>{
    console.log("");
    console.log("Done");
})