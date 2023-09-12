import path  from "path";
import fs from "fs"
import { error } from "console";


// fs.mkdir("./NewClass", (error): void => {
//     if(error){
//         console.log("an error in creating folder", error);        
//     }else{
//         console.log("folder created sucessful");        
//     }
// })

// const newMsg = "Help me buy food"
// fs.writeFile(path.join(__dirname, "Newclass", "OldFile.txt"), newMsg, (error)
// :void => {
//     if(error){
//         console.log("Error writing a file", error);        
//     }else{
//         console.log("New file Added");        
//     }
// })

// const newMsg2 = "\nBuy snacks for joan"

// fs.appendFile(path.join(__dirname, "Newclass", "OldFile.txt"), newMsg2,
// (error): void=>{
//     if(error){
//         console.log("An error in appending file", error);        
//     }else{
//         console.log("New file Appended");        
//     }
// }
// )

// const My = "\nName is daniel"

// setInterval((el) => {
//     fs.appendFile(path.join(__dirname, "NewClass", "File.txt"), "\nmy name is daniel ",
// (error): void=>{
//     if(error){
//         console.log("An error in appending file", error);        
//     }else{
//         console.log("New file Appended");        
//     }
// }
// )
// }, 5000)

const rand:string[] = ["my name is daniel","I'm a man" , "I have a brother"]
const age = Math.floor(Math.random() * rand.length)
// console.log(age);

// let split = rand.
// console.log(split);

// setInterval((el) => {
//     const rand:string[] = ["my name is daniel","\nI'm a man" , "\nI have a brother", "\nI lived i lagos", "\nI'm a happty man"]
// const age = Math.floor(Math.random() * rand.length)
//     fs.appendFile(path.join(__dirname, "NewClass", "File.txt"), rand[age],(error): void=>{
//         if(error){
//              console.log("An error in appending file", error);        
//              }else{
//                  console.log("New file Appended");        
//                 }
//     })
    
// }, 3000)

// fs.mkdir("./Folder1", (error): void =>{
//     if(error){
//         console.log("error in creating a folder");        
//     }else{
//         console.log("folder created");
        
//     }
// })



// fs.mkdir("./Folder2", (error): void=>{
//     if(error){
//         console.log("error in creating folder2");        
//     }console.log("folder2 created");
    
// })


// fs.mkdir("./Folder3", (error):void=>{
//     if(error){
//         console.log("error in creating ");        
//     }else{
//         console.log("folder3 created");
        
//     }
// })


// fs.mkdir("./Folder4", (error): void=>{
//     if(error){
//         console.log("Erro in creatng folder4");        
//     }else{
//         console.log("Folder4 created");
        
//     }
// })

// fs.mkdir("./Folder5", (error): void=>{
//     if(error){
//         console.log("error in creating Folder5");        
//     }else{
//         console.log("Folder5 created");
        
//     }
// })


// fs.writeFile(path.join(__dirname, "Folder1", "File1"), "A new work", (error): void => {
//     if(error){
//         console.log("error in creating a folder");        
//     }else{
//         console.log("Folder created");
        
//     }
// })

// fs.writeFile(path.join(__dirname, "Folder1", "File12"),"A new work2", (error):void=>{
//     if(error){
//         console.log("An erro");        
//     }else{
//         console.log("created");
                
//     }
// })


// fs.writeFile(path.join(__dirname, "Folder2", "File2"), "Welcome", (error): void=>{
//     if(error){
//         console.log("erro");        
//     }else{
//         console.log("created");
        
//     }
// })

// fs.writeFile(path.join(__dirname, "Folder2", "FIle23"), "A new begining", (error))

// fs.writeFile(path.join(__dirname, "Folder3", "File3"), "A new start", (error))

// fs.writeFile(path.join(__dirname, "Folder3", "File33"), "A Fresher", (error))

// fs.writeFile(path.join(__dirname, "Folder4", "File4"), "A new phase", (error))

// fs.writeFile(path.join(__dirname, "Folder4", "File42"), "A new World", (error))

// fs.writeFile(path.join(__dirname, "Folder5", "File5"), "A new World", (error))

// fs.writeFile(path.join(__dirname, "Folder5", "File52"), "A new World", (error))



// toRead a file utf-8 convert buffer data to readable file

fs.readFile(path.join(__dirname, "NewClass", "File.txt"), "utf-8", (error, data) =>{
    if(error){
        console.log(error);        
    }else{
        console.log(data);        
    }
})

