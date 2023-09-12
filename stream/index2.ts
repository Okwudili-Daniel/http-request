import fs from "fs"

function readMy() {
    const readFile = fs.createReadStream("./streamFile.txt", "utf-8");

    readFile.on("error", function error () {
        console.log(`An error occured`, error);
    });

    readFile.on("data", (buffer) =>{
        console.log("Reading data from my file", buffer);        
    });    
}

readMy()