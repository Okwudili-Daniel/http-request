// const http = require ("http")

// const PORT  = 4000

// const server = http.createServer((request, response)=>{
//     response.writeHead(200)
//     response.write("server is up and run 🥰😅🥰")
//     response.end()
// })


// server.listen(PORT, () =>{
//     console.log("port is up and listen");
// })

const http = require("http")

const port = 2000

const server = http.createServer((request, respond) =>{
    respond.writeHead(200)
    respond.write("Created")
    respond.end()
})

server.listen(port, () =>{
    console.log("Done");
})