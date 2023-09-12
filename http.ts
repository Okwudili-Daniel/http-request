// import http, {ServerResponse, IncomingMessage} from "http"

// const port: number = 1889

// const Server = http.createServer((req:IncomingMessage, res: ServerResponse<IncomingMessage>) =>{
//     res.writeHead(200)
//     res.write("Server is up and running using typescript")
//     res.end()
// })

// Server.listen(port, () =>{
//     console.log(`listen to port ${port}`);
    
// })


import http, {ServerResponse, IncomingMessage} from "http"
    
const port = 2000

const server = http.createServer((req: IncomingMessage, res: ServerResponse<IncomingMessage>) =>{
    res.writeHead(200)
    res.write("Created")
    res.end()
})

server.listen(port, () =>{
    console.log("Done");
    
})
